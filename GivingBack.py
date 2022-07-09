# Importing python-telegram-bot's library functions
from telegram.ext import *
from telegram import *
import requests
import gspread
import os
from datetime import date
# Setting up our logger
import logging
from fpdf import FPDF
import random

bot_token = "5560267266:AAFtVmeKIVHgWEbnJtdw4EuuHeOTLiyo8-0"

# bot_token = os.environ.get('ezWeb_bot_token')

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

updater = Updater(token=bot_token, use_context=True)
dispatcher = updater.dispatcher
sa = gspread.service_account()
sh = sa.open('givingback.sg database')
wks = sh.worksheet("Sheet1")
current_user = {}
docs_counter = 1001
def start(update, context):
    buttons = [[InlineKeyboardButton("How may I start?", callback_data="info")],
               [InlineKeyboardButton("Get my summarised volunteering report.", callback_data="get_volunteering_report")],
               [InlineKeyboardButton("Submit volunteer event code.", callback_data="submit_volunteering_event_code")]]
    welcome_text = "Welcome to GivingBack.sg, a centralised volunteering platform. What would you like me to help you out with?"
    context.bot.send_message(chat_id=update.effective_chat.id, text=welcome_text,
                             reply_markup=InlineKeyboardMarkup(buttons))
    print(update.effective_chat.id)

def info(update, context):
    to_reply = """
Visit GivingBack.sg to sign up for an account. Then, you can start looking for volunteering opportunities on the site.
    
FAQ
    
How do I record my volunteering hours for a recent event?

Use the '/start' command and click on the 'Submit volunteer event code'. Then, receive the event code from your event coordinator and submit it to this bot. Your event hours will be processed and updated promptly.
    """
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text=to_reply)
    reset(update, context)

def get_volunteering_report(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Sure! Retrieving data...")
    tg_id = update.effective_chat.id
    row = 1
    buttons = [[InlineKeyboardButton("Convert into pdf file.", callback_data="convert_report_to_pdf")],
               [InlineKeyboardButton("Exit bot.", callback_data="reset")]]
    while wks.acell('A' + str(row)).value != str(tg_id):
        row += 1
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Finding your particulars...")
    volunteering_report = generate_report(update, context, row, wks)
    if volunteering_report == "No information found.":
        context.bot.send_message(chat_id=update.effective_chat.id,
                                 text="No information found. We hope to have you volunteer with us soon! :)")
        reset(update, context)
    else:
        context.bot.send_message(chat_id=update.effective_chat.id,
                             text=volunteering_report,
                             reply_markup=InlineKeyboardMarkup(buttons))

def convert_report_to_pdf(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Converting to pdf...")
    pdf_helper(update, context)
    #Save as pdf file
    context.bot.send_document(chat_id=update.effective_chat.id,
                              document=open(current_user[update.effective_chat.id]['filename'], "rb"))
    reset(update, context)

def pdf_helper(update, context):
    global docs_counter
    pdf = FPDF()
    pdf.add_page()
    pdf.image("logo.png", x=None, y=None, w=200, h=60)
    pdf.set_font('Arial', 'B', 16)
    pdf.cell(200, 10, txt="Volunteer Report Breakdown",
             ln=1, align='C')
    information = current_user[update.effective_chat.id]['report']
    info = information.split("\n")
    counter = 2
    pdf.set_font('Arial', "", 10)
    for inf in info:
        pdf.cell(200, 10, txt=inf, ln=counter, align='C')
        counter += 1
    docs_counter += 1

    print(str(docs_counter))
    filename= "Report" + str(docs_counter) + ".pdf"
    pdf.output(filename, dest='F')
    current_user[update.effective_chat.id]['filename'] = filename
    """
    Name: weop
    
    Total number of hours: 8
    
    Events:
    
    qwe - qweq - qe - qwe
    qwe - qweq - qe - qwe
    qwe - qweq - qe - qwe
    
    Awards:
    
    qwe - qweq - qe - qwe
    qwe - qweq - qe - qwe
    qwe - qweq - qe - qwe
    """

def generate_report(update, context, row, wks):
    global current_user
    to_return = "Name: "
    to_return += wks.acell('B' + str(row)).value
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Name retrieved..")
    to_return += "\n\nTotal number of hours: "
    if wks.acell('D' + str(row)).value is None:
        return "No information found."
    to_return += wks.acell('C' + str(row)).value
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Total number of hours retrieved..")
    to_return += "\n\nEvents\n\n"
    to_return += wks.acell('D' + str(row)).value
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Events retrieved..")
    info = wks.acell('E' + str(row)).value
    if info is not None:
        to_return += "\n\nAwards"
        to_return += info
    current_user[update.effective_chat.id] = {}
    current_user[update.effective_chat.id]['report'] = to_return
    return to_return

def submit_volunteering_event_code(update, context):
    global current_user
    if current_user.get(update.effective_chat.id) is None:
        current_user[update.effective_chat.id] = {}
    current_user[update.effective_chat.id]['state'] = 'submit_volunteering_event_code'
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Please submit your volunteer event code and receive your hours!")

def confirm_volunteer_hours_added(update, context, hours, event_details):
    event_info = event_details.split(" -")
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Event '" + event_info[0] + "' registered... ")
    global wks
    tg_id = update.effective_chat.id
    row = 1
    while wks.acell('A' + str(row)).value != str(tg_id):
        row += 1
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Adding " + str(hours) + " hours...")
    events = wks.acell('D' + str(row)).value
    num_hours = wks.acell('C' + str(row)).value
    new_hours = int(num_hours) + hours
    if events is None:
        events = ""
    else:
        events += "\n\n"
    events += event_details
    wks.update('D' + str(row), events)
    wks.update('C' + str(row), str(new_hours))
    context.bot.send_message(chat_id=update.effective_chat.id,
                             text="Done! " + str(hours) + " hours successfully added for event: " + event_info[0])
    reset(update, context)

def reset(update, context):
    global current_user
    current_user[update.effective_chat.id] = {}
    context.bot.send_message(chat_id=update.effective_chat.id, text="Let me know if you need anything else by using the /start command! :)")

def inline_query(update, context):
    query = update.callback_query.data
    update.callback_query.answer()
    context.bot.edit_message_reply_markup(
        message_id=update.callback_query.message.message_id,
        chat_id=update.callback_query.message.chat.id,
        reply_markup=None)

    if query == "get_volunteering_report":
        get_volunteering_report(update, context)
    elif query == "info":
        info(update, context)
    elif query == "submit_volunteering_event_code":
        submit_volunteering_event_code(update, context)
    elif query == "convert_report_to_pdf":
        convert_report_to_pdf(update, context)
    elif query == "reset":
        reset(update, context)


def message_handler(update, context):
    if current_user[update.effective_chat.id].get('state') == 'submit_volunteering_event_code':
        context.bot.send_message(chat_id=update.effective_chat.id,
                                 text="Processing data... Please wait...")
        hours = 5

        events = ["Elderly daycare visit - 5 hours - Lion Befrienders - 9 July 2022",
                  "Tutoring disadvantaged children - 5 hours - Think Centre - 9 July 2022",
                  "Beach Cleanup - 5 hours - NUS - 9 July 2022",
                  "Marathon Logistics - 5 hours - Standard Chartered - 9 July 2022",
                  "Ang Mo Kio Food Drive - 5 hours - Food from the Heart - 9 July 2022",
                  "Clothing Donation Drive - 5 hours - Eagle Welfare Association - 9 July 2022",
                  "Operation Orange - 5 hours - Fei Yue Community Centre - 9 July 2022",
                  "Heyday Workshop - 5 hours - Anglo-Chinese Junior College - 9 July 2022",
                  "Overseas VIA (Kampot, Cambodia) - 5 hours - Tabitha Foundation - 9 July 2022",
                  "Malaria Awareness Week - 5 hours - Bill and Melinda Gates Foundation - 9 July 2022"]
        num = random.randint(0, 9)
        event_details = events[num]
        # item = {'code':update.message.text}
        # event = requests.get("http://givingback.sg/volunteer_codes", params=item)
        # event_info = event.json()
        # confirm_volunteer_hours_added(update, context, event_info['hours'], event_info['details'])
        confirm_volunteer_hours_added(update, context, hours, event_details)
    else:
        context.bot.send_message(chat_id=update.effective_chat.id,
                                 text="I'm not sure what you're looking for.. please be more specific.")


# Create and add command handlers
start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

catchall_handler = MessageHandler(Filters.text, message_handler)
dispatcher.add_handler(catchall_handler)

query_handler = CallbackQueryHandler(inline_query)
dispatcher.add_handler(query_handler)

updater.start_polling()
updater.idle()

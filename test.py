import eel
import time 
import email
import time
import os
import smtplib, ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from tkinter.constants import Y
from PIL import Image, ImageDraw, ImageFilter
from pynput.mouse import Button, Controller
from pathlib import Path
import os
from Passwords import *

def email_send_attachment(Filename, email):
	fromaddr = 'gradyandhannahmcknight@gmail.com'
	To = [email]

	ToAddrs = To
	msg = MIMEMultipart()
	msg['From'] = fromaddr
	msg['To'] = ", ".join(To)
	msg['Subject'] = "Grady & Hannah Photobooth"
	body = "Your Text will go Here"

	msg.attach(MIMEText(body, 'html'))
	filename = str(Filename)
	attachment = open(filename, "rb")
	p = MIMEBase('application', 'octet-stream')
	p.set_payload((attachment).read())
	encoders.encode_base64(p)
	p.add_header('Content-Disposition', "attachment; filename= %s" % 'Grady&HannahPhotoBooth.jpg')
	msg.attach(p)
	s = smtplib.SMTP('smtp.gmail.com', 587)
	s.starttls()
	s.login(fromaddr, passwordPyhtonNoah)
	text = msg.as_string()
	s.sendmail(fromaddr, ToAddrs, text)
	s.quit()

# email_send_attachment("/Users/noahnemec/Desktop/Photo Booth/www/hanah bigger.jpg", "gradyandhannahmcknight@gmail.com")


def take_photo():
	mouse = Controller()
	# print("take photo ran")
	
	# Read pointer position
	time.sleep(3)

	print('The current pointer position is {0}'.format(
	    mouse.position))
	# Set pointer position
	# mouse.position = (98, 65)

	# Press and release
	mouse.press(Button.left)
	mouse.release(Button.left)
	# write_num()
take_photo()
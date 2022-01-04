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
from PIL import Image, ImageDraw, ImageFilter, ImageCms
from pynput.mouse import Button, Controller
from pathlib import Path
import os
from Passwords import *
import io

# def email_send_attachment(Filename, email):
# 	fromaddr = 'gradyandhannahmcknight@gmail.com'
# 	To = [email]

# 	ToAddrs = To
# 	msg = MIMEMultipart()
# 	msg['From'] = fromaddr
# 	msg['To'] = ", ".join(To)
# 	msg['Subject'] = "Grady & Hannah Photobooth"
# 	body = "Your Text will go Here"

# 	msg.attach(MIMEText(body, 'html'))
# 	filename = str(Filename)
# 	attachment = open(filename, "rb")
# 	p = MIMEBase('application', 'octet-stream')
# 	p.set_payload((attachment).read())
# 	encoders.encode_base64(p)
# 	p.add_header('Content-Disposition', "attachment; filename= %s" % 'Grady&HannahPhotoBooth.jpg')
# 	msg.attach(p)
# 	s = smtplib.SMTP('smtp.gmail.com', 587)
# 	s.starttls()
# 	s.login(fromaddr, passwordPyhtonNoah)
# 	text = msg.as_string()
# 	s.sendmail(fromaddr, ToAddrs, text)
# 	s.quit()

# # email_send_attachment("/Users/noahnemec/Desktop/Photo Booth/www/hanah bigger.jpg", "gradyandhannahmcknight@gmail.com")


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

# emailAdress = "testing"

# def photo_collection(email_addr):
# 	template = Image.open('www/hanah bigger.jpg').convert('RGB')
# 	img_num1,img_num2,img_num3,img_num4 = "/Users/noahnemec/Desktop/Photo Booth/www/Photos/IMG_0101.jpg","/Users/noahnemec/Desktop/Photo Booth/www/Photos/IMG_0102.jpg","/Users/noahnemec/Desktop/Photo Booth/www/Photos/IMG_0103.jpg","/Users/noahnemec/Desktop/Photo Booth/www/Photos/IMG_0104.jpg",

# 	# print(img_num1)
# 	img1 = Image.open(img_num1)
# 	img2 = Image.open(img_num2)
# 	img3 = Image.open(img_num3)
# 	img4 = Image.open(img_num4)


# 	img1_new = img1.resize((1080,720))
# 	img2_new = img2.resize((1080,720))
# 	img3_new = img3.resize((1080,720))
# 	img4_new = img4.resize((1080,720))

# 	# img1_new.save("test.jpg", quality=100)


# 	back_im = template.copy()
# 	back_im.paste(img4_new, (55,51))
# 	back_im.paste(img3_new, (55,810))
# 	back_im.paste(img2_new, (55,1569))
# 	back_im.paste(img1_new, (55,2331))

# 	# img1_new.save("www/Sent Photos/testing/final2.jpg")

# 	back_im.save(f"www/Sent Photos/{email_addr}/Final8.jpg", quality=95)


# photo_collection(emailAdress)
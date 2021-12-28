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







	
# @eel.expose
# def print_name(email_address):
#   print(email_address)


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 


def file_read(Position):
	with open('www/Photo_num.txt', 'r') as f:
		last_line = f.readlines()[int(Position)]
		# print(last_line)
		return last_line

# print(file_read(-4))


# print(find_img())

def file_write(number):
	with open('www/Photo_num.txt', 'a') as the_file:
		the_file.write("\n" + number.zfill(4))
		for i in range(int(file_read(-1))+1, int(file_read(-1))+5):
			# print(i)
			return i  


@eel.expose	
def write_num():

	test = int(file_read(-1))+1
	file_write(str(test))
	test = int(file_read(-1))+1
	file_write(str(test))
	test = int(file_read(-1))+1
	file_write(str(test))
	test = int(file_read(-1))+1
	file_write(str(test))
	return test

# write_num()

@eel.expose
def email_click():
	mouse = Controller()
	print("email clicl ran")
	
	# print('The current pointer position is {0}'.format(mouse.position))
	
	mouse.position = (44, 75)
	# mouse.position = (346.20318603515625, 157.62562561035156)
	# print('Now we have moved it to {0}'.format(mouse.position))
	# Press and release
	mouse.press(Button.left)
	mouse.release(Button.left)


@eel.expose
def init_click():
	mouse = Controller()
	
	# print('The current pointer position is {0}'.format(mouse.position))
	
	mouse.position = (44, 75)
	# mouse.position = (346.20318603515625, 157.62562561035156)
	# print('Now we have moved it to {0}'.format(mouse.position))
	# Press and release
	mouse.press(Button.left)
	mouse.release(Button.left)


@eel.expose
def take_photo():
	mouse = Controller()
	print("take photo ran")
	
	# Read pointer position
	# print('The current pointer position is {0}'.format(
	#     mouse.position))
	# time.sleep(1)
	# Set pointer position
	mouse.position = (98, 65)
	# mouse.position = (306.8240051269531, 203.43341064453125)

	# Press and release
	mouse.press(Button.left)
	mouse.release(Button.left)
	# write_num()

# take_photo()


# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

@eel.expose
def email_send_attachment(Filename, email):
	fromaddr = 'gradyandhannahmcknight@gmail.com'
	To = [email]

	ToAddrs = To
	msg = MIMEMultipart()
	msg['From'] = fromaddr
	msg['To'] = ", ".join(To)
	msg['Subject'] = "Grady & Hannah Photobooth"
	body = "Thanks for celebrating with us! Love, The McKnights"

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

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

def new_dir(email_addr):
	# Directory
	directory = email_addr
	
	# Parent Directory path
	parent_dir = "www/Sent Photos/"
	
	# Path
	path = os.path.join(parent_dir, directory)
	
	# Create the directory
	# 'GeeksForGeeks' in
	# '/home / User / Documents'
	# os.mkdir(path)
	try:
		os.mkdir(path)
	except OSError as error:
		print(error)  
	
	print("Directory '% s' created" % directory)
	move_files(email_addr)


def move_files(email_addr):

	Path(f"www/Photos/IMG_{file_read(-1).strip()}.jpg").rename(f"www/Sent Photos/{email_addr}/IMG_{file_read(-1).strip()}.jpg")
	# Path(f"www/Photos/IMG_{file_read(-1).strip()}.rw2").rename(f"www/Sent Photos/{email_addr}/IMG_{file_read(-1).strip()}.rw2")
	Path(f"www/Photos/IMG_{file_read(-2).strip()}.jpg").rename(f"www/Sent Photos/{email_addr}/IMG_{file_read(-2).strip()}.jpg")
	# Path(f"www/Photos/IMG_{file_read(-2).strip()}.rw2").rename(f"www/Sent Photos/{email_addr}/IMG_{file_read(-2).strip()}.rw2")
	Path(f"www/Photos/IMG_{file_read(-3).strip()}.jpg").rename(f"www/Sent Photos/{email_addr}/IMG_{file_read(-3).strip()}.jpg")
	# Path(f"www/Photos/IMG_{file_read(-3).strip()}.rw2").rename(f"www/Sent Photos/{email_addr}/IMG_{file_read(-3).strip()}.rw2")
	Path(f"www/Photos/IMG_{file_read(-4).strip()}.jpg").rename(f"www/Sent Photos/{email_addr}/IMG_{file_read(-4).strip()}.jpg")
	# Path(f"www/Photos/IMG_{file_read(-4).strip()}.rw2").rename(f"www/Sent Photos/{email_addr}/IMG_{file_read(-4).strip()}.rw2")
	photo_collection(email_addr)

# move_files()



# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 

def photo_collection(email_addr):
	template = Image.open('www/hanah bigger.jpg').convert('RGB')
	img_num1,img_num2,img_num3,img_num4 = find_img(email_addr)

	# print(img_num1)
	img1 = Image.open(img_num1)
	img2 = Image.open(img_num2)
	img3 = Image.open(img_num3)
	img4 = Image.open(img_num4)


	img1_new = img1.resize((1080,720))
	img2_new = img2.resize((1080,720))
	img3_new = img3.resize((1080,720))
	img4_new = img4.resize((1080,720))

	# img1_new.save("test.jpg", quality=100)


	back_im = template.copy()
	back_im.paste(img4_new, (55,51))
	back_im.paste(img3_new, (55,810))
	back_im.paste(img2_new, (55,1569))
	back_im.paste(img1_new, (55,2331))

	back_im.save(f"www/Sent Photos/{email_addr}/Final.jpg", quality=100)
# photo_collection()

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 


def find_img(email_addr):
	file1 = f"www/Sent Photos/{email_addr}/IMG_{file_read(-1).strip()}.jpg"
	file2 = f"www/Sent Photos/{email_addr}/IMG_{file_read(-2).strip()}.jpg"
	file3 = f"www/Sent Photos/{email_addr}/IMG_{file_read(-3).strip()}.jpg"
	file4 = f"www/Sent Photos/{email_addr}/IMG_{file_read(-4).strip()}.jpg"
	return file1,file2, file3, file4

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 


##########################################################################################################

@eel.expose
def runApp(Email):
	email_address = Email

	new_dir(email_address)

	

	
	# eel.showEmail(email_address)
	print("email Python: " + email_address)
	# testing()
	# return email_address

# def main():
# 	os.system('clear')
# 	global email_addr, final_email
# 	email_addr = str(input("Please Enter your Email Adress: "))
	
# 	init_click()
# 	take_photo()
# 	take_photo()
# 	take_photo()
# 	take_photo()
	
	
 



# 	final_email = verify_email()
# 	# print(final_email)
# 	time.sleep(4)
# 	new_dir(final_email)

# 	photo_collection(final_email)

# 	# print (f"Sending Email to: {email_addr}")
# 	# time.sleep(10)
# 	# email_send_attachment('test_full.jpg')






eel.init("www")
eel.start("index.html")



# def verify_email():
# 	os.system('clear')
# 	global test, no
# 	test = str(input(f"Would you like to send the pictures to the following Email?(Y/N) \n -> {email_addr} \n"))

# 	yes = {'yes','y', 'ye', ''}
# 	no = {'no','n'}


# 	if test in yes:
# 		# print("you picked yes")
# 		return email_addr
# 	elif test in no:
# 		email_addr_new = str(input("Please Enter new Email Adress: "))
# 		# print("you picked no")

# 		return email_addr_new
		
# 	else:
# 		print("Please enter Y or N")
# 		verify_email()
# 		return None
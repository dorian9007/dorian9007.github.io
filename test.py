import smtplib

server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
server.login("maxmusterman123211@gmail.com", "maxmustermann")
server.sendmail(
  "maxmusterman123211@gmail.com", 
  "dorianvoka2@web.de", 
  "automated email via python script")
server.quit()

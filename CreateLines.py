
import sys

#In order to create the go board using pure html, need about 40 html tags to create each line. That's to much work to do by hand
#Generate lines with a for loop in this program



#out1 will have x: +0.025
#out2 will have y: -0.025
var1=-0.225
var2=0.225

#out1 = '"<a-entity line="start: '+var1+' .1251 .225; end: '+var1+' .1251 -.225; color: black"></a-entity>"'
#out2 = '<a-entity line="start: -.225 .1251 '+var2+'; end: .225 .1251 '+var2+'; color: black"></a-entity>'

output = open('output.txt', 'w')

for x in range(19):

    print('<a-entity line=\"start: %7.3f .1251 .225; end: %7.3f .1251 -.225; color: black\"></a-entity>' % (var1 + (0.025*x), var1 + (0.025*x)) , file = output) 
    print('<a-entity line=\"start: -.225 .1251 %7.3f; end: .225 .1251 %7.3f; color: black\"></a-entity>' % (var2 - (0.025*x), var2 - (0.025*x)) , file = output) 

output.close()

#Solved
import hashlib

input="bgvyzdsv"

trying_hash="bbd0b4dcb0d07a947bf3c280f99baffd"
hash_list=[*trying_hash]
i=0
#while hash_list[0]!="0" or hash_list[1]!="0" or hash_list[2]!="0" or hash_list[3]!="0" or hash_list[4]!="0":
while i>-1: 
    search_hash=input+str(i)
    trying_hash=hashlib.md5(search_hash.encode()).hexdigest()
    hash_list=[*trying_hash]
    i=i+1
    if hash_list[0]=="0" and hash_list[1]=="0" and hash_list[2]=="0" and hash_list[3]=="0" and hash_list[4]=="0" and hash_list[5]=="0" :
        print(search_hash)
       


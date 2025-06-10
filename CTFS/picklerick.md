# Systmctl -- Writeup/Walktrough: Pickle Rick CTF | TryHackMe

![47d2d3ade1795f81a155d0aca6e4da96](https://hackmd.io/_uploads/r1DK4f8zxe.jpg)

> **Date:** *29/05/2025*
> **Difficulty:** *Beginner*
> **Room Link:** *[Pickle Rick CTF](https://tryhackme.com/room/picklerick)*
> **My TryHackMe Profile:** *[Systmctl](https://tryhackme.com/p/systmctl)*

--- 

<img src="https://tryhackme-badges.s3.amazonaws.com/systmctl.png" alt="Your Image Badge" />

### Hello! I'm **Systmctl**. In this writeup, I'll walk you through the Pickle Rick CTF — a beginner-friendly and entertaining challenge based on the Rick and Morty series.

### My goal is to contribute directly to the hacking community by sharing detailed walkthroughs and writeups of the challenges I complete. I hope this content is helpful to others who are learning or looking to improve their skills.

---

***Alright, let’s get started! We’ll begin by launching the machine, wait a couple of minutes for it to boot up, and then jump right into the challenge.***

With the machine up and running, I’d like to provide some explanations. Since this is an easy CTF, I believe most readers of this writeup are beginners.

In general, when performing web application hacking or CTF challenges, we follow some common exploration patterns.

For example, when you have an IP address hosting a website (i.e., when the HTTP port is open), the very first step is usually to view the page source.

This is because, both in CTFs and real-world scenarios, developers often leave comments or hints in the HTML source code that can be useful for the attacker.

Therefore, checking the page source is the initial step in the reconnaissance phase.

![VirtualBoxVM_NKl8RCoDEk](https://hackmd.io/_uploads/H19RUz8zxg.png)
**As you can see, we found a very important piece of information: a username. This suggests that there is likely a login page on the site. While this username could belong to an SSH user or something similar, it is more common for it to be related to the website’s login. Having this information saves us a lot of time because if a login page is discovered, we won’t need to perform brute force attacks or guess usernames, the CTF has already provided us with one.**

---

**With the initial exploration phase complete for now, we move on to the directory enumeration phase. Basically, we will use a tool that sends requests to the website, checking various directories. Each directory returns a status code, and depending on the response, the tool informs us with messages like “200 – The page exists” or similar. So, let’s get started with the enumeration, in this case i prefer to use the FFUF fuzzing tool.**

![VirtualBoxVM_Q2M10ZBvSc](https://hackmd.io/_uploads/r1hiOzUMle.png)
**With our first scan complete, we can see that it found several directories, but one in particular caught my attention: robots.txt. This is a configuration file for search engines that basically tells them which directories they should or shouldn’t crawl. Usually, this file can contain important information, so it’s essential to check it.**

![VirtualBoxVM_Ufzu0cyv8Y](https://hackmd.io/_uploads/rkKKYGIGxx.png)
**We found one of Rick’s iconic words, lol, I personally find it pretty funny. Now, we have a potential password to access the website.**

**Username:** *R1ckRul3s*
**Probably Password:** *Wubbalubbadubdub*

**After checking all the other directories, I searched around but didn’t find anything useful, mostly just images and similar files. I also inspected the image metadata using exiftool, but found nothing relevant. Therefore, I’ve decided not to include that part of the process here.**

![VirtualBoxVM_mvBPLHO5xL](https://hackmd.io/_uploads/rkrn6GIfgl.png)
**BINGO! Running a second scan with a larger and more precise wordlist, we found a directory called login.php, which confirms my theory that the site has a login page. So, let’s go ahead and check it out.**
---

![VirtualBoxVM_IANWSdzdIE](https://hackmd.io/_uploads/Hk_MAfUMgx.png)
**Now that we have access to the login page, we can try logging into the site. We’ll use the username we found earlier, along with the potential password we discovered.**

![VirtualBoxVM_0s41jkM3rS](https://hackmd.io/_uploads/S17uRMLfgl.png)
**BINGO again! We’re logged into the site!
This is a very important step, not just in CTFs, but in real-world hacking as well. Gaining access through a login is often a crucial milestone that defines the next steps you'll need to take to reach your objective.**

![VirtualBoxVM_gt2LvI3b9F](https://hackmd.io/_uploads/ry5V1mLGlg.png)
**By running a simple ls, we were able to list the website's directories and spot the first flag. It appears to be located in one of the site's accessible directories, so let’s navigate to it and capture the first flag.**

**First Flag:** *mr. meeseek hair*

**Now that we have a "terminal" at our disposal, we can move on to the next flag. In this case, we’ll use a technique called a reverse shell to gain access to the main terminal, allowing us to interact with the machine more effectively.**

**First, we need to listen on a port using Netcat. In this case, we’ll use the following command:**

*nc -lvnp 1337*

**This sets up a listener on port 1337, waiting for the reverse shell connection from the target machine.**

![image](https://hackmd.io/_uploads/ryB7WmIMlx.png)

---

Now we’re going to use a reverse shell to gain access to the machine.

![image](https://hackmd.io/_uploads/HJMhGQLMlx.png)
**After using the reverse shell in this CTF, we successfully gained access to the machine. Now, we can begin the enumeration process, checking files, directories, and other useful information within the target system.**

![image](https://hackmd.io/_uploads/BJY_mXIfge.png)
We found a directory inside /home called rick. Let’s cd into it and see what’s inside.

![image](https://hackmd.io/_uploads/HktzVQLfll.png)
**We found the second flag; now we just need to access it and view its contents.**

![image](https://hackmd.io/_uploads/SJFKV78fle.png)
**We got the second flag! Now, we can move on to the third flag!!!**

**Second Flag:** *1 jerry tear*

![image](https://hackmd.io/_uploads/HktfHXIzel.png)
**By using sudo su, we gained root access. Now, we can enumerate and locate the third flag.**

![image](https://hackmd.io/_uploads/r1z5BQ8Gxl.png)
**We accessed the /root directory, and inside it was the third flag. With that, we have completed all three challenges.**

**Third Flag:** *fleeb juice*

![image](https://hackmd.io/_uploads/SJfbUmUfel.png)

<img src="https://tryhackme-badges.s3.amazonaws.com/systmctl.png" alt="Your Image Badge" />
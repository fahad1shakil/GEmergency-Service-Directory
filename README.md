Assalamualaikum

Answer the following questions clearly:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
ans :   
getElementById("id") = এটি একটি নির্দিষ্ট id দ্বারা HTML element খুঁজে বের করে। সবসময় একটা element রিটার্ন করে।
getElementsByClassName("class") = এটি নির্দিষ্ট ক্লাস নাম অনুযায়ী এক বা একাধিক element খুঁজে বের করে। সবসময় একটি HTMLCollection (array-like) রিটার্ন করে।
querySelector("selector") = CSS selector ব্যবহার করে element খুঁজে বের করে। প্রথম যে element match করবে, সেটি রিটার্ন করবে।
querySelectorAll("selector") = CSS selector ব্যবহার করে একাধিক element খুঁজে বের করে। সব element কে NodeList আকারে রিটার্ন করে।

2. How do you create and insert a new element into the DOM?
   
Ans :
 নতুন element তৈরি করতে document.createElement() ব্যবহার করা হয়।সেটিতে কনটেন্ট যোগ করতে innerText বা innerHTML ব্যবহার করা হয়।এরপর DOM-এ যোগ করতে appendChild() বা append() ব্যবহার করা হয়।
   
3. What is Event Bubbling and how does it work?
   
ans:
 Event Bubbling হলো এমন একটি প্রক্রিয়া যেখানে একটি event (যেমন: click) প্রথমে child element থেকে শুরু হয় এবং ধাপে ধাপে তার parent, grandparent element পর্যন্ত চলে যায়। মানে event নিচ থেকে ওপরে propagate হয়।
   
4. What is Event Delegation in JavaScript? Why is it useful?
   
ans:

Event Delegation হলো parent element এ event listener বসানো, যাতে তার child element গুলো event handle করতে পারে।এটি event bubbling এর উপর ভিত্তি করে কাজ করে। একাধিক child element এর জন্য আলাদা listener বসানোর দরকার হয় না।
কেন দরকারি?
Performance ভালো হয়। Dynamically added child elements এর ক্ষেত্রেও কাজ করে।

   
5. What is the difference between preventDefault() and stopPropagation() methods?
   
   ans : 
   preventDefault() একটি event এর default behavior বন্ধ করে। যেমন: form submit করলে default ভাবে page reload হয়। সেটি থামানো যাবে preventDefault() দিয়ে।
 stopPropagation() Event Bubbling বা Event Capturing বন্ধ করে দেয়। মানে event আর parent element এ propagate হবে না

GitHub Repository : https://github.com/fahad1shakil/GEmergency-Service-Directory

live link : https://fahad1shakil.github.io/GEmergency-Service-Directory/



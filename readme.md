### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


১নং প্রশ্নের উত্তর :
getElementById এটা শুরু আইডে দেয়।

getElementByClassName এটা একাদিক এলিমেন্ট দেয়। ক্লাস আকারে

querySeletor এটা সি এস এস মতো অনেক একাদিক এলিমেন্টে কাজ করে।

querySelectorAll  এটা সআ এলিমেন্ট দেয়।



২নং প্রশ্নের উত্তর :
DOM  এ নতুন এলিমেন্ট তৈরি করা 

 আগে document.createElement("tagName") দিয়ে এলিমেন্ট তৈরি করতে হয়।

 তারপর চাইলে element.textContent বা innerHTML দিয়ে কন্টেন্ট দিতে হয়।


DOM এ ঢুকিয়ে দিতে হয়।




৩ নং প্রশ্নের উত্তর :
Event Bubbling কী কিভাবে কাজ করে?

Event Bubbling মানে হলো – যখন কোনো element এ event ঘটে (যেমন click), তখন সেটা ভিতরের element থেকে বাইরে দিকে একে একে parent element গুলোতেও পৌঁছে যায়।






৪ নং প্রশ্নের উত্তর : Delegation কী কেন দরকারি?

Event Delegation হলো – parent element এ একটা event listener বসানো, তারপর child element গুলোর event কে সেখান থেকে হ্যান্ডেল করা।



৫ নং প্রশ্নের উত্তর 
ইভেন্ট হ্যান্ডলারের মধ্যে ব্যবহৃত জাভাস্ক্রিপ্টের preventDefault() এবং stopPropagation() পদ্ধতিগুলি ডকুমেন্ট অবজেক্ট মডেল (DOM) এর মধ্যে ইভেন্ট আচরণ নিয়ন্ত্রণে স্বতন্ত্র উদ্দেশ্যে কাজ করে।





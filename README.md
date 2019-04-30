# Word Frequency Counter
This is a word frequency counter, as the name suggests, the user inputs text onto the website and the output is a list of words with a number corresponding to the frequency the word appears. 

# Example
Let's say I input the following block of text:

>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself!

After pressing the submit button, below the input box, a list of words would appear with the amount of times they appeared in the text. 
The following is what the top part, the most frequent appearing words, would be displayed as on the website:

![the	13
of	6
far	4
and	4
blind	4](https://github.com/claby2/word-freq/blob/master/images/readme-display.png)

# How it works
The website is mainly back-end reliant. It mostly utilizes JS. The program starts by getting rid of any punctuation as to avoid counting *example.* and *example* as two seperate words. Instead, these two words would be under the word category of *example* and have a frequency of 2 in this example. 

The website also features a live search feature. Once an output is shown after an input is sent, the user is able to search for certain words to find out its frequency. As you type, the code would parse through the words list and display words which correspond to the search input. The reason it is labelled as 'live' is that every time it detects a key press, it would register to find the entry. 

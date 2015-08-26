# Vulcun Challenge

## Notes:

Most of my work can be found in node files and db/seeds.  I had completed a basic node/socket chat app tutorial before and instructions 1-3 interested me the most so that's where I spent most of my time.  I'd never used a noSQL database before so I decided to start there since I would be using Node and wanted the entire stack to be javascript (and after reading about sharding I thought it'd be a good idea).  I taught myself redis and mongodb yesterday (it took a long time) and I was able to seed the database quickly for the first million but no matter what I did it always slowed down at around 1,800,000.  I thought this was a problem with my functions, so I tried a bunch of different ways (You can still see the sloppy work in node_files/previous_chat_app/part_one.js).  Finding all the "johns" still took multiple seconds though.  I spoke with a housemate as he was passing by and he mentioned that I should use an index, which I ended up researching.  Eventually I settled on the fact that SQL queries would probably be quicker so I switched back to rails and postgres to nail out the database.  I ended up using raw sql queries to cut down the seed and "john" retrieval time.  Completing 1-3 is the goal I set out to accomplish (at the very least) and because of all the information I learned through the process (noSQL, sharding, indexing, optomizing queries) in my mind I consider this a success.  The seed, the query, and rough sketch of what a filter might look like can be found in the db/seeds.rb file.  As far as the chat app goes, I was planning on modeling it after this app: https://github.com/liamks/rails-realtime .  I was considering mimicking the backbone just to make it work but I don't know backbone and figured it would be cheating.  I was just starting to toy with the idea of embedded javascript when I ran out of steam and time.  I stopped coding under the 24 hour mark and if you'd like me to add more to the project and/or finish it please let me know.  Also, please send me any feedback you have regarding the code!  Regardless of how I'm assessed, I'd love the opportunity to talk to someone on your end about the process and the ideal way of approaching the problem, if someone has the time.  Anyway, I enjoyed the challenge (it was tough!) and I look forward to hearing back from you.  Thanks for the opportunity and your time.

-Josh Ullman
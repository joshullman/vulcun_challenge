time_start = Time.now
k = 0
100.times do 
	inserts = []
	10000.times do	
		first_name = Faker::Name.first_name
		last_name = Faker::Name.last_name
		full_name = "#{first_name} #{last_name}"
		full_name.gsub!("'", "")
		email = "#{full_name}@email.com"
		city = Faker::Address.city.gsub("'", "")
	  inserts.push "(\'#{full_name}\', \'#{email}\', \'#{city}\')"
	end
	inserts.each do |insert|
		sql = "INSERT INTO users (full_name, email, city) VALUES #{insert}"
		ActiveRecord::Base.connection.execute(sql)
	end
	inserts = [] 
	k += 1
	puts k
end
time_end = Time.now
puts "~32 secs"
puts time_end - time_start

# time_start = Time.now
# User.where("full_name LIKE '%John%' OR full_name LIKE '%john%'")
# puts Time.now - time_start'

def rand_thous
	total_users = User.count
	(total_users * 0.0001).times do
		rand = rand(total_users)
		user_id = User.find(rand).id
		content = Faker::Lorem.sentence
		blocked_words.each do |word|
			content.gsub!(word, (word.length * '*')
			# n^2, so ugly - temporary solution
		end
		Message.create(user_id: user_id, content: content)
	end
end

blocked_words = [
"the",
"be",
"to",
"of",
"and",
"a",
"in",
"that",
"have",
"I",
"it",
"for",
"not",
"on",
"with",
"he",
"as",
"you",
"do",
"at",
"this",
"but",
"his",
"by",
"from",
"they",
"we",
"say",
"her",
"she",
"or",
"an",
"will",
"my",
"one",
"all",
"would",
"there",
"their",
"what",
"so",
"up",
"out",
"if",
"about",
"who",
"get",
"which",
"go",
"me",
"when",
"make",
"can",
"like",
"time",
"no",
"just",
"him",
"know",
"take",
"person",
"into",
"year",
"your",
"good",
"some",
"could",
"them",
"see",
"other",
"than",
"then",
"now",
"look",
"only",
"come",
"its",
"over",
"think",
"also",
"back",
"after",
"use",
"two",
"how",
"our",
"work",
"first",
"well",
"way",
"even",
"new",
"want",
"because",
"any",
"these",
"give",
"day",
"most",
"us"
]
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

difficulties = ['easy', 'medium', 'hard']
categories = (1..21).to_a

categories.each do |category_number|
    
   difficulties.each do |level|
        trivia_url = "https://opentdb.com/api.php?amount=10&category=#{category_number}&difficulty=#{level}&type=multiple"
        trivia_data = HTTParty.get(trivia_url)
        trivia_data['results'].each do |category_question|
            cat = Category.find_or_create_by(subject: category_question['category'])
            diff = Difficulty.find_or_create_by(difficulty: category_question['difficulty'])
            sanitizeQues = CGI.unescapeHTML(category_question['question'])
            sanitizeAnswer = CGI.unescapeHTML(category_question['correct_answer'])
            ques = Question.new(question: sanitizeQues, correct_answer: sanitizeAnswer, difficulty: diff, category: cat)
            ques.incorrect_answer_1 = CGI.unescapeHTML(category_question['incorrect_answers'][0])
            ques.incorrect_answer_2 = CGI.unescapeHTML(category_question['incorrect_answers'][1])
            ques.incorrect_answer_3 = CGI.unescapeHTML(category_question['incorrect_answers'][2])
            ques.save
        end
    end
end
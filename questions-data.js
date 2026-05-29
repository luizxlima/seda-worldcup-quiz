// ==============================
// SEDA College — World Cup English Quiz
// Questions Data — 100 Questions Pool
// ==============================

const allQuestionsPool = [
    {
      question: "What does the referee blow to start a football match?",
      options: ["A trumpet", "A whistle", "A horn", "A bell"],
      correct: 1, difficulty: "easy",
      explanation: "The referee blows a whistle to start and stop play during a match."
    },
    {
      question: "In English, what is the area where the goalkeeper stands called?",
      options: ["The net zone", "The goal box", "The penalty area", "The keeper's square"],
      correct: 2, difficulty: "easy",
      explanation: "The penalty area (also called the 18-yard box) is the zone where the goalkeeper can use their hands."
    },
    {
      question: "What does 'offside' mean in a football match?",
      options: [
        "When the ball goes out of the pitch",
        "When a player is closer to the goal than the last defender when the ball is played",
        "When a player commits a foul",
        "When the goalkeeper catches the ball"
      ],
      correct: 1, difficulty: "medium",
      explanation: "A player is offside when they are nearer to the opponent's goal line than both the ball and the second-last opponent."
    },
    {
      question: "Which phrase would you use to ask for directions to the stadium in English?",
      options: [
        "Where is the stadium at?",
        "Could you tell me how to get to the stadium?",
        "The stadium is where?",
        "I need stadium directions now."
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Could you tell me how to get to...?' is a polite and natural way to ask for directions in English."
    },
    {
      question: "What is a 'hat-trick' in football?",
      options: [
        "A trick play by the goalkeeper",
        "Three goals scored by the same player in one match",
        "A special type of free kick",
        "When a player juggles the ball three times"
      ],
      correct: 1, difficulty: "medium",
      explanation: "A hat-trick is when a single player scores three goals in one match — a remarkable achievement!"
    },
    {
      question: "You're at a World Cup fan zone. How do you order food in English?",
      options: [
        "Give me food.",
        "Food, please, now.",
        "Could I have a burger and a drink, please?",
        "I want eat something."
      ],
      correct: 2, difficulty: "easy",
      explanation: "'Could I have... please?' is a polite and correct way to order food in English."
    },
    {
      question: "What does 'VAR' stand for in modern football?",
      options: [
        "Video Assistant Referee",
        "Virtual Analysis Review",
        "Video Active Replay",
        "Verified Action Report"
      ],
      correct: 0, difficulty: "medium",
      explanation: "VAR stands for Video Assistant Referee — technology used to review important match decisions."
    },
    {
      question: "Which sentence correctly describes a goal in English?",
      options: [
        "He made a goal with his head.",
        "He scored a header.",
        "He did a goal by head.",
        "He goaled with the head."
      ],
      correct: 1, difficulty: "hard",
      explanation: "'He scored a header' is the correct English expression. 'To score' is the verb used for goals."
    },
    {
      question: "The 2026 World Cup will be hosted across three countries. Which expression best fits?",
      options: [
        "The tournament is being held in the US, Mexico, and Canada.",
        "The tournament is being made in three countries.",
        "They are doing the World Cup in America.",
        "The cup is happening at three places."
      ],
      correct: 0, difficulty: "hard",
      explanation: "'Is being held in' is the correct passive construction for describing where events take place."
    },
    {
      question: "What do English speakers call the final match of the World Cup?",
      options: ["The last game", "The grand match", "The final", "The championship play"],
      correct: 2, difficulty: "easy",
      explanation: "'The final' (or 'the World Cup Final') is the standard English term for the last match."
    }
,
    {
      question: "What is the English word for the person who coaches the team?",
      options: ["The trainer", "The manager", "The commander", "The chief"],
      correct: 1, difficulty: "easy",
      explanation: "In English football, the head coach is commonly called 'the manager'."
    },
    {
      question: "Which phrase means a player was removed from the game by the referee?",
      options: ["He was pushed out", "He was sent off", "He was kicked away", "He was removed out"],
      correct: 1, difficulty: "medium",
      explanation: "'Sent off' means a player receives a red card and must leave the pitch."
    },
    {
      question: "How do you say 'empate' in English football?",
      options: ["A tie", "A draw", "A level", "A same"],
      correct: 1, difficulty: "easy",
      explanation: "In football, 'a draw' is the correct term for when both teams have the same score."
    },
    {
      question: "At a stadium, what does 'sold out' mean?",
      options: [
        "The stadium is being sold",
        "All tickets have been purchased",
        "The match has been cancelled",
        "Merchandise is on sale"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Sold out' means all tickets are gone — the event is at full capacity."
    },
    {
      question: "What is the correct way to say a team won by a narrow margin?",
      options: [
        "They won by the skin of their teeth.",
        "They won by the hair of the ball.",
        "They won by a small foot.",
        "They won by a tiny whistle."
      ],
      correct: 0, difficulty: "hard",
      explanation: "'By the skin of their teeth' is an idiom meaning 'barely' or 'by a very small margin'."
    },
    {
      question: "You want to ask someone at the stadium: 'Where can I buy a team jersey?' Which is most natural?",
      options: [
        "Where I buy the shirt of team?",
        "Excuse me, where can I find the merchandise shop?",
        "I need to purchase cloth of team.",
        "Shop of shirts is where?"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'Excuse me, where can I find...' is a polite and natural way to ask for locations."
    },
    {
      question: "What does 'extra time' mean in a football match?",
      options: [
        "When the referee adds time for delays",
        "Two additional 15-minute periods played in knockout matches when it's a draw",
        "When the match starts late",
        "When players take a longer break"
      ],
      correct: 1, difficulty: "medium",
      explanation: "Extra time is two 15-minute periods added in knockout matches when the score is tied after 90 minutes."
    },
    {
      question: "Which is the correct English term for 'cartão amarelo'?",
      options: ["Gold card", "Yellow card", "Warning card", "Caution ticket"],
      correct: 1, difficulty: "easy",
      explanation: "A 'yellow card' is shown by the referee as a cautionary warning to a player."
    },
    {
      question: "Complete: 'The striker _____ the ball into the top corner.'",
      options: ["smashed", "threw", "punched", "pushed"],
      correct: 0, difficulty: "medium",
      explanation: "'Smashed' describes a powerful shot into the goal — common in football commentary."
    },
    {
      question: "What does 'full-time' mean at a football match?",
      options: [
        "The players play all day",
        "The end of the 90-minute match",
        "When all substitutions are used",
        "When the stadium is completely full"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Full-time' signals the end of the standard 90-minute match."
    }
,
    {
      question: "What does 'pitch' refer to in English football?",
      options: ["The ball", "The playing field", "The goal", "The referee's decision"],
      correct: 1, difficulty: "easy",
      explanation: "In British English, the football 'pitch' is the playing field."
    },
    {
      question: "Which is the correct way to describe a 0-0 game?",
      options: ["A zero game", "A nil-nil draw", "A nothing match", "A blank score"],
      correct: 1, difficulty: "medium",
      explanation: "'Nil' is the British English term for zero in football. 'Nil-nil draw' = 0-0."
    },
    {
      question: "You're lost near the stadium. How do you politely ask for help?",
      options: [
        "Help me! I am lost!",
        "Excuse me, I think I'm lost. Could you point me in the right direction?",
        "Where am I? Tell me!",
        "Lost! Stadium! Where?"
      ],
      correct: 1, difficulty: "easy",
      explanation: "Being polite and specific helps you get better directions in English."
    },
    {
      question: "What is a 'clean sheet' in football?",
      options: [
        "When the pitch is freshly mowed",
        "When a team doesn't concede any goals",
        "When all players get a yellow card",
        "When the referee makes no mistakes"
      ],
      correct: 1, difficulty: "medium",
      explanation: "A 'clean sheet' means the goalkeeper and defence didn't concede any goals in the match."
    },
    {
      question: "Which sentence uses the present perfect correctly?",
      options: [
        "Brazil has won the World Cup five times.",
        "Brazil has win the World Cup five times.",
        "Brazil have winning the World Cup five times.",
        "Brazil did has won the World Cup five times."
      ],
      correct: 0, difficulty: "hard",
      explanation: "'Has won' is the correct present perfect form of 'to win'."
    },
    {
      question: "What does 'man of the match' mean?",
      options: [
        "The tallest player",
        "The best-performing player in the game",
        "The team captain",
        "The oldest player on the field"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Man of the match' is an award given to the best player in a game."
    },
    {
      question: "At a restaurant near the stadium, how do you ask for the bill?",
      options: [
        "Give me money paper!",
        "Could I have the check, please?",
        "I want to pay paper.",
        "Where is the price list?"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Could I have the check/bill, please?' is the standard polite way to ask."
    },
    {
      question: "What does 'injury time' mean?",
      options: [
        "Time when players get injured",
        "Additional minutes added to compensate for stoppages",
        "A break for injured players",
        "The time a player spends recovering"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'Injury time' (or 'stoppage time') is extra time added by the referee for delays during the match."
    },
    {
      question: "Complete: 'The fans _____ with excitement when the goal was scored.'",
      options: ["erupted", "exploded out", "made noise big", "shouted up"],
      correct: 0, difficulty: "hard",
      explanation: "'Erupted with excitement' is a vivid and natural expression in English."
    },
    {
      question: "What is a 'derby' in English football?",
      options: [
        "A match between teams from the same city or region",
        "A special cup competition",
        "A horse racing event",
        "A training session"
      ],
      correct: 0, difficulty: "medium",
      explanation: "A 'derby' is a match between local rivals — like Manchester United vs Manchester City."
    }
,
    {
      question: "How many host cities will the 2026 World Cup have?",
      options: ["12", "14", "16", "18"],
      correct: 2, difficulty: "easy",
      explanation: "The 2026 World Cup will be played across 16 host cities in the US, Mexico, and Canada."
    },
    {
      question: "What does 'group stage' mean in the World Cup?",
      options: [
        "When players form groups to warm up",
        "The initial phase where teams play in groups to qualify for knockout rounds",
        "When fans gather in groups",
        "The final stage of the tournament"
      ],
      correct: 1, difficulty: "easy",
      explanation: "The 'group stage' is the first phase of the World Cup where teams compete in groups."
    },
    {
      question: "Which city will host the 2026 World Cup Final?",
      options: ["New York", "Mexico City", "Dallas", "MetLife Stadium, New Jersey"],
      correct: 3, difficulty: "medium",
      explanation: "MetLife Stadium in East Rutherford, New Jersey will host the 2026 World Cup Final."
    },
    {
      question: "You need to take a taxi to the stadium. What do you say?",
      options: [
        "Drive me stadium now.",
        "Could you take me to the stadium, please?",
        "I want go stadium car.",
        "Stadium taxi please go."
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Could you take me to..., please?' is polite and clear for taxi drivers."
    },
    {
      question: "What does 'knock-out stage' mean?",
      options: [
        "When players are physically knocked out",
        "The elimination rounds where losing means going home",
        "A practice round",
        "When the referee knocks on the dressing room"
      ],
      correct: 1, difficulty: "easy",
      explanation: "The 'knock-out stage' is where teams are eliminated if they lose — win or go home!"
    },
    {
      question: "Which is the correct way to check into a hotel in English?",
      options: [
        "I have a booking. My name is...",
        "Give me room now.",
        "I reserved. Room. Please.",
        "Room is mine, I paid."
      ],
      correct: 0, difficulty: "medium",
      explanation: "'I have a booking/reservation under the name...' is the standard check-in phrase."
    },
    {
      question: "What does 'aggregate score' mean in football?",
      options: [
        "The combined score from two legs of a match",
        "The average score of all matches",
        "The highest score in the tournament",
        "The score prediction by experts"
      ],
      correct: 0, difficulty: "hard",
      explanation: "'Aggregate score' is the total score across both legs (home and away) in a two-legged tie."
    },
    {
      question: "How do you ask about public transport in a World Cup city?",
      options: [
        "Where is the train going stadium?",
        "How do I get to the stadium by public transport?",
        "Transport me to stadium!",
        "What bus goes stadium direction?"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'How do I get to... by public transport?' is clear and well-structured English."
    },
    {
      question: "What does 'seeded' mean when talking about the World Cup draw?",
      options: [
        "Teams that plant grass on the pitch",
        "Teams ranked and placed to avoid meeting early in the tournament",
        "Teams with the youngest players",
        "Teams that have never won before"
      ],
      correct: 1, difficulty: "hard",
      explanation: "'Seeded teams' are ranked and distributed to ensure the strongest teams don't meet too early."
    },
    {
      question: "Complete: 'The atmosphere at the stadium was absolutely _____.'",
      options: ["electric", "shocking", "wired", "charged up"],
      correct: 0, difficulty: "medium",
      explanation: "'Electric atmosphere' is a common expression to describe an exciting, high-energy environment."
    }
,
    {
      question: "At a World Cup fan festival, what does 'grab a bite' mean?",
      options: [
        "To bite someone",
        "To eat something quickly",
        "To grab a ticket",
        "To take a seat"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Grab a bite' is informal English for eating a quick meal or snack."
    },
    {
      question: "How do you ask if a dish contains allergens at a restaurant?",
      options: [
        "This got bad things inside?",
        "Does this dish contain any nuts/gluten/dairy?",
        "Allergies in food? Yes or no?",
        "The food have problems?"
      ],
      correct: 1, difficulty: "medium",
      explanation: "Specifying the allergen clearly helps restaurant staff ensure your safety."
    },
    {
      question: "What is a 'street food vendor' at the World Cup?",
      options: [
        "A person who sells food from a stall or cart on the street",
        "A player who eats on the street",
        "A food delivery person",
        "A restaurant on the main road"
      ],
      correct: 0, difficulty: "easy",
      explanation: "Street food vendors sell food from stalls, carts, or trucks — very common at World Cup events."
    },
    {
      question: "How do you compliment food in English?",
      options: [
        "The food is very delicious!",
        "This is really tasty! I love it.",
        "Food good, me like.",
        "The taste of this food is maximum."
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Really tasty' and 'I love it' are natural, enthusiastic compliments in English."
    },
    {
      question: "What does 'on the house' mean at a bar?",
      options: [
        "On the rooftop",
        "You have to go upstairs",
        "It's free — the establishment is paying",
        "Only available at home"
      ],
      correct: 2, difficulty: "medium",
      explanation: "'On the house' means the drink or food is free — a generous gesture from the establishment."
    },
    {
      question: "Which sentence correctly orders a round of drinks?",
      options: [
        "Give me drinks for all peoples!",
        "I'd like to buy a round for everyone, please.",
        "Drinks! All! Now!",
        "I want everyone has drinks."
      ],
      correct: 1, difficulty: "medium",
      explanation: "'I'd like to buy a round' is the standard way to offer drinks for a group."
    },
    {
      question: "You have dietary restrictions. How do you explain this?",
      options: [
        "I no eat meat.",
        "I'm vegetarian. Do you have any meat-free options?",
        "Meat forbidden for me.",
        "Without meat food give."
      ],
      correct: 1, difficulty: "easy",
      explanation: "Stating your dietary need and asking about options is clear and polite."
    },
    {
      question: "What does 'tip' mean in a restaurant context?",
      options: [
        "A suggestion",
        "Extra money given to the server for good service",
        "The edge of the table",
        "A special discount"
      ],
      correct: 1, difficulty: "easy",
      explanation: "A 'tip' (or 'gratuity') is extra money given for good service — common in the US (15-20%)."
    },
    {
      question: "At a bar during the World Cup, how do you ask what's on tap?",
      options: [
        "What beers you have?",
        "Show me your beer list.",
        "What do you have on draught/tap?",
        "Beer! What types?"
      ],
      correct: 2, difficulty: "medium",
      explanation: "'What do you have on tap/draught?' is the natural way to ask about available beers."
    },
    {
      question: "What does the expression 'break bread together' mean?",
      options: [
        "To destroy bread",
        "To share a meal and build friendship",
        "To cook bread at home",
        "To argue while eating"
      ],
      correct: 1, difficulty: "hard",
      explanation: "'Breaking bread together' means sharing a meal as a way of bonding and building relationships."
    }
,
    {
      question: "Who is the all-time top scorer in FIFA World Cup history?",
      options: ["Pelé", "Ronaldo (R9)", "Miroslav Klose", "Just Fontaine"],
      correct: 2, difficulty: "medium",
      explanation: "Miroslav Klose holds the record with 16 goals across four World Cups (2002-2014)."
    },
    {
      question: "What does 'hat-trick hero' mean in English football?",
      options: [
        "A player who wears three different hats",
        "A player who scores three goals and becomes the star of the match",
        "A goalkeeper who saves three penalties",
        "A coach who wins three games in a row"
      ],
      correct: 1, difficulty: "easy",
      explanation: "A 'hat-trick hero' is a player celebrated for scoring three goals in one match."
    },
    {
      question: "Complete: 'Pelé is widely _____ as the greatest footballer of all time.'",
      options: ["regarded", "looked", "viewed at", "seen like"],
      correct: 0, difficulty: "hard",
      explanation: "'Regarded as' is the correct collocation meaning 'considered to be'."
    },
    {
      question: "What does 'underdog' mean in a World Cup context?",
      options: [
        "A team's mascot dog",
        "A team expected to lose but who might surprise everyone",
        "The bottom team in the rankings",
        "A substitute player"
      ],
      correct: 1, difficulty: "medium",
      explanation: "An 'underdog' is a team or person not expected to win — but who might cause an upset!"
    },
    {
      question: "Which country won the first ever FIFA World Cup in 1930?",
      options: ["Brazil", "Argentina", "Uruguay", "Italy"],
      correct: 2, difficulty: "medium",
      explanation: "Uruguay hosted and won the first World Cup in 1930, beating Argentina 4-2 in the final."
    },
    {
      question: "What does the expression 'against all odds' mean?",
      options: [
        "Against all opponents",
        "Despite being very unlikely to succeed",
        "Against the rules",
        "With everyone watching"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'Against all odds' means achieving something despite it being highly unlikely."
    },
    {
      question: "What is the English word for 'goleiro'?",
      options: ["Goal man", "Goalkeeper", "Goal catcher", "Net defender"],
      correct: 1, difficulty: "easy",
      explanation: "'Goalkeeper' (or 'keeper/goalie') is the standard English term."
    },
    {
      question: "Diego Maradona's 'Hand of God' goal happened in which World Cup?",
      options: ["1982 Spain", "1986 Mexico", "1990 Italy", "1994 USA"],
      correct: 1, difficulty: "medium",
      explanation: "Maradona's famous 'Hand of God' goal was scored against England in the 1986 World Cup in Mexico."
    },
    {
      question: "What does 'to lift the trophy' mean?",
      options: [
        "To clean the trophy",
        "To win the championship and hold up the trophy in celebration",
        "To carry the trophy to the bus",
        "To put the trophy on a shelf"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Lifting the trophy' is the iconic moment when the winning captain raises the cup."
    },
    {
      question: "Complete: 'The team gave a _____ performance in the final.'",
      options: ["stellar", "star-like", "shining of", "bright as"],
      correct: 0, difficulty: "hard",
      explanation: "'Stellar performance' means an outstanding, excellent display — like a star."
    }
,
    {
      question: "How many teams will compete in the 2026 World Cup?",
      options: ["32", "40", "48", "56"],
      correct: 2, difficulty: "easy",
      explanation: "The 2026 World Cup will feature 48 teams — an expansion from the previous 32."
    },
    {
      question: "Which three countries are co-hosting the 2026 World Cup?",
      options: [
        "USA, Brazil, Argentina",
        "USA, Mexico, Canada",
        "Mexico, Colombia, USA",
        "Canada, England, USA"
      ],
      correct: 1, difficulty: "easy",
      explanation: "The 2026 World Cup will be co-hosted by the United States, Mexico, and Canada."
    },
    {
      question: "What does 'co-hosting' mean?",
      options: [
        "Competing together",
        "Sharing the responsibility of hosting an event across multiple countries",
        "Having two referees",
        "Playing twice as many games"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Co-hosting' means multiple countries share the duties and privilege of hosting."
    },
    {
      question: "Which stadium has the largest capacity among 2026 venues?",
      options: [
        "Azteca Stadium, Mexico City",
        "SoFi Stadium, Los Angeles",
        "MetLife Stadium, New Jersey",
        "AT&T Stadium, Dallas"
      ],
      correct: 2, difficulty: "hard",
      explanation: "MetLife Stadium in New Jersey has the largest capacity and will host the Final."
    },
    {
      question: "Complete: 'The expanded format means more teams will have the _____ to compete.'",
      options: ["opportunity", "chance of", "possibility for", "opening to"],
      correct: 0, difficulty: "medium",
      explanation: "'Have the opportunity to' is the grammatically correct and natural expression."
    },
    {
      question: "You need to go through US customs. What does the officer mean by 'What's the purpose of your visit?'",
      options: [
        "What are you buying?",
        "Why are you coming to this country?",
        "Where is your passport?",
        "How long is your flight?"
      ],
      correct: 1, difficulty: "easy",
      explanation: "The officer is asking why you are entering the country. A good answer: 'I'm here to attend the World Cup.'"
    },
    {
      question: "What does 'fan ID' refer to in major tournaments?",
      options: [
        "A player's identification number",
        "A special pass for spectators that may serve as a visa or entry to stadiums",
        "The referee's badge",
        "A coach's credentials"
      ],
      correct: 1, difficulty: "medium",
      explanation: "A Fan ID is a document for spectators that can provide stadium access and even visa-free entry."
    },
    {
      question: "The new World Cup format has groups of how many teams?",
      options: ["3", "4", "5", "6"],
      correct: 0, difficulty: "hard",
      explanation: "In the 2026 format, 48 teams are divided into 12 groups of 3 teams each."
    },
    {
      question: "What does 'state-of-the-art' mean when describing a stadium?",
      options: [
        "The stadium is a work of art",
        "The stadium uses the latest and most advanced technology",
        "The stadium is old and historical",
        "The stadium is very colourful"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'State-of-the-art' means using the most modern, advanced technology and design available."
    },
    {
      question: "How do you say 'Estou muito ansioso para a Copa' in natural English?",
      options: [
        "I am very anxious for the Cup.",
        "I can't wait for the World Cup!",
        "I am much excited to the Cup.",
        "The Cup makes me nervous happy."
      ],
      correct: 1, difficulty: "medium",
      explanation: "'I can't wait for...' expresses eager anticipation — not anxiety. 'Ansioso' ≠ 'anxious' here!"
    }
,
    {
      question: "What does the expression 'a game of two halves' mean?",
      options: [
        "A match that is 90 minutes long",
        "A match where performance differs greatly between the first and second half",
        "A match played on two different days",
        "A match with two referees"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'A game of two halves' describes a match where one half was very different from the other."
    },
    {
      question: "What does 'to park the bus' mean in football?",
      options: [
        "To park the team bus near the stadium",
        "To play extremely defensively with all players behind the ball",
        "To stop playing",
        "To delay the start of the match"
      ],
      correct: 1, difficulty: "hard",
      explanation: "'Parking the bus' means putting all players in defence — a very defensive strategy."
    },
    {
      question: "What does 'back of the net' mean?",
      options: [
        "Behind the goal",
        "A goal has been scored — the ball hit the back of the net",
        "The goalkeeper caught the ball",
        "A net behind the bench"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Back of the net!' is an excited expression used when someone scores a goal."
    },
    {
      question: "If someone says 'he's on fire,' what do they mean?",
      options: [
        "The player is literally burning",
        "The player is playing exceptionally well",
        "The player has a fever",
        "The player is angry"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'On fire' is an idiom meaning someone is performing at an incredibly high level."
    },
    {
      question: "What does 'to be shown the door' mean for a football manager?",
      options: [
        "To be given a tour of the stadium",
        "To be fired/sacked from their position",
        "To be shown the exit after a match",
        "To receive a new contract"
      ],
      correct: 1, difficulty: "hard",
      explanation: "'Shown the door' is an idiom meaning to be dismissed or fired from a job."
    },
    {
      question: "What does 'scoring a screamer' mean?",
      options: [
        "Shouting very loudly when scoring",
        "Scoring a spectacular, powerful long-range goal",
        "Scoring and screaming in pain",
        "Scoring from an easy position"
      ],
      correct: 1, difficulty: "medium",
      explanation: "A 'screamer' is a spectacular goal, usually a powerful long-range shot."
    },
    {
      question: "What does 'to be on the ropes' mean in a match context?",
      options: [
        "Playing near the boundary ropes",
        "Being in serious trouble, close to losing",
        "Warming up with ropes",
        "Celebrating with ropes"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'On the ropes' (from boxing) means being in a very difficult situation, close to defeat."
    },
    {
      question: "What does 'a clinical finish' mean?",
      options: [
        "A boring goal",
        "A precise, efficient goal — taken with great skill",
        "A goal scored in a hospital",
        "A slow, weak shot that went in"
      ],
      correct: 1, difficulty: "medium",
      explanation: "A 'clinical finish' describes a goal scored with precision and composure."
    },
    {
      question: "What does the idiom 'moving the goalposts' mean?",
      options: [
        "Physically relocating the goals",
        "Changing the rules or requirements unfairly",
        "Scoring from a different position",
        "A new stadium design"
      ],
      correct: 1, difficulty: "hard",
      explanation: "'Moving the goalposts' means unfairly changing rules or criteria after something has started."
    },
    {
      question: "Complete: 'The goalkeeper pulled off an _____ save.'",
      options: ["incredible", "unbelieving", "impossibility", "amazing of"],
      correct: 0, difficulty: "easy",
      explanation: "'Pulled off an incredible save' is natural English for a spectacular goalkeeping moment."
    }
,
    {
      question: "Which sentence uses the conditional correctly?",
      options: [
        "If Brazil will win, I will be happy.",
        "If Brazil wins, I'll be over the moon.",
        "If Brazil is winning, I be happy.",
        "If Brazil won, I am happy."
      ],
      correct: 1, difficulty: "hard",
      explanation: "First conditional: 'If + present simple, will + infinitive.' Also, 'over the moon' = extremely happy!"
    },
    {
      question: "Which sentence uses the passive voice correctly?",
      options: [
        "The goal was scored by Messi.",
        "The goal scored by Messi.",
        "Messi was scoring the goal by him.",
        "The goal Messi scored was by."
      ],
      correct: 0, difficulty: "medium",
      explanation: "Passive voice: 'was/were + past participle + by (agent).' 'Was scored by Messi' is correct."
    },
    {
      question: "Complete: 'The team _____ been training hard since January.'",
      options: ["has", "have", "is", "are"],
      correct: 0, difficulty: "medium",
      explanation: "'The team' is singular in standard English, so 'has been training' is correct."
    },
    {
      question: "Which sentence correctly uses a relative clause?",
      options: [
        "The player which scored the goal is from Argentina.",
        "The player who scored the goal is from Argentina.",
        "The player what scored the goal is from Argentina.",
        "The player he scored the goal is from Argentina."
      ],
      correct: 1, difficulty: "medium",
      explanation: "'Who' is the correct relative pronoun for people, not 'which' (for things) or 'what'."
    },
    {
      question: "What is the correct reported speech for: 'I will score today,' said the striker?",
      options: [
        "The striker said he will score today.",
        "The striker said that he would score that day.",
        "The striker said I will score today.",
        "The striker said he is scoring today."
      ],
      correct: 1, difficulty: "hard",
      explanation: "Reported speech shifts tenses back: 'will' → 'would', 'today' → 'that day'."
    },
    {
      question: "Choose the correct comparative: 'Messi is _____ than Haaland.'",
      options: ["more shorter", "shorter", "most short", "short than"],
      correct: 1, difficulty: "easy",
      explanation: "Short adjectives form comparatives by adding '-er': short → shorter."
    },
    {
      question: "Which sentence uses the correct verb pattern?",
      options: [
        "The coach suggested to change the formation.",
        "The coach suggested changing the formation.",
        "The coach suggested change the formation.",
        "The coach suggested for changing the formation."
      ],
      correct: 1, difficulty: "hard",
      explanation: "'Suggest' is followed by a gerund (-ing form): 'suggested changing'."
    },
    {
      question: "Complete: 'Neither the forwards _____ the midfielders played well.'",
      options: ["or", "nor", "and", "but"],
      correct: 1, difficulty: "medium",
      explanation: "'Neither...nor' is the correct correlative conjunction pair."
    },
    {
      question: "Which sentence uses the correct article?",
      options: [
        "He is best player in the world.",
        "He is the best player in the world.",
        "He is a best player in world.",
        "He is one best player in the world."
      ],
      correct: 1, difficulty: "easy",
      explanation: "Superlatives require 'the': 'the best player in the world.'"
    },
    {
      question: "What's the difference between 'play' and 'support' a team?",
      options: [
        "No difference, they mean the same",
        "'Play for' means you are a player; 'support' means you are a fan",
        "'Play' is informal, 'support' is formal",
        "'Support' means you are a sponsor"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'I play for Barcelona' = I'm a player. 'I support Barcelona' = I'm a fan."
    }
,
    {
      question: "What does the idiom 'it's a whole new ball game' mean?",
      options: [
        "They bought new footballs",
        "The situation has completely changed",
        "A new sport is being played",
        "The second half has started"
      ],
      correct: 1, difficulty: "hard",
      explanation: "'A whole new ball game' means the situation has changed drastically."
    },
    {
      question: "Which phrasal verb means 'to warm up before a match'?",
      options: ["Warm out", "Heat up", "Limber up", "Hot down"],
      correct: 2, difficulty: "hard",
      explanation: "'Limber up' means to do exercises to prepare your body for physical activity."
    },
    {
      question: "Complete: 'The World Cup _____ place every four years.'",
      options: ["takes", "makes", "does", "has"],
      correct: 0, difficulty: "easy",
      explanation: "'Takes place' is the correct collocation meaning 'occurs' or 'happens'."
    },
    {
      question: "What does 'to be capped' mean for a player?",
      options: [
        "To wear a captain's hat",
        "To be selected to play for the national team",
        "To be limited in how many goals they can score",
        "To be injured and unable to play"
      ],
      correct: 1, difficulty: "hard",
      explanation: "'Capped' means selected for the national team. '50 caps' = 50 international appearances."
    },
    {
      question: "You arrive at US immigration. The officer says 'How long will you be staying?' Best answer?",
      options: [
        "I stay maybe some time.",
        "I'll be here for two weeks to attend World Cup matches.",
        "Don't know. Long time maybe.",
        "Until the Cup ends."
      ],
      correct: 1, difficulty: "medium",
      explanation: "Being specific and clear with immigration officers is important: state your duration and purpose."
    },
    {
      question: "What does 'nil' mean in English football?",
      options: ["Nothing/zero", "One", "A foul", "A penalty"],
      correct: 0, difficulty: "easy",
      explanation: "'Nil' is the British English word for zero in football scores: 'two-nil' = 2-0."
    },
    {
      question: "Complete with the correct phrasal verb: 'The player _____ his injury and returned to play.'",
      options: ["got over", "got under", "got in", "got from"],
      correct: 0, difficulty: "medium",
      explanation: "'Got over' means to recover from something — an illness, injury, or disappointment."
    },
    {
      question: "What does 'to pull off an upset' mean?",
      options: [
        "To remove someone from the match",
        "To defeat a much stronger opponent unexpectedly",
        "To become upset during a game",
        "To pull a muscle"
      ],
      correct: 1, difficulty: "medium",
      explanation: "'Pulling off an upset' means winning against a team/opponent that was expected to win."
    },
    {
      question: "Which sentence best describes the 2026 World Cup format?",
      options: [
        "48 teams will be competed in 12 groups of 3.",
        "48 teams will compete in 12 groups of 3.",
        "48 teams competing at 12 groups for 3.",
        "48 teams are competed on 12 groups by 3."
      ],
      correct: 1, difficulty: "hard",
      explanation: "'Will compete in' uses the correct future tense and preposition."
    },
    {
      question: "What is the best way to wish a team good luck in English?",
      options: [
        "Have good lucks!",
        "Best of luck! Go get 'em!",
        "Luck to you all many!",
        "I luck you very much!"
      ],
      correct: 1, difficulty: "easy",
      explanation: "'Best of luck!' and 'Go get 'em!' are natural, enthusiastic ways to wish a team well."
    }
  ];

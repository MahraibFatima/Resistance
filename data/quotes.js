const quotes = [
    {
        text: "The Palestinians are the native owners of this land, and we are determined to remain on it.",
        author: "Yasser Arafat",
        category: "political"
    },
    {
        text: "To be Palestinian is to always have hope.",
        author: "Mahmoud Darwish",
        category: "poetry"
    },
    {
        text: "My homeland is not a suitcase, and I am no traveller.",
        author: "Mahmoud Darwish",
        category: "poetry"
    },
    {
        text: "We have a simple message to the world: we will not disappear.",
        author: "Hanin Zoabi",
        category: "political"
    },
    {
        text: "The olive tree is the symbol of our resilience and connection to the land.",
        author: "Traditional Proverb",
        category: "cultural"
    },
    {
        text: "They thought because we had no land, we had no history.",
        author: "Rashid Hussein",
        category: "poetry"
    },
    {
        text: "Palestine is the memory and the hope.",
        author: "Edward Said",
        category: "academic"
    },
    // New quotes start here
    {
        text: "If the olive trees knew the hands that planted them, their oil would become tears.",
        author: "Mahmoud Darwish",
        category: "poetry"
    },
    {
        text: "We have a culture, we have a heritage, we have a history. We are not empty people.",
        author: "Ghassan Kanafani",
        category: "cultural"
    },
    {
        text: "The Palestinian cause is not a cause for Palestinians only, but a cause for every revolutionary.",
        author: "Ahmed Jibril",
        category: "political"
    },
    {
        text: "I am from there. I am from here. I am not there and I am not here.",
        author: "Mahmoud Darwish",
        category: "poetry"
    },
    {
        text: "They can steal our land, but they can never steal our identity.",
        author: "Leila Khaled",
        category: "resistance"
    },
    {
        text: "Every Palestinian has a story that deserves to be told.",
        author: "Susan Abulhawa",
        category: "literature"
    },
    {
        text: "The will of the people is greater than the technology of repression.",
        author: "George Habash",
        category: "political"
    },
    {
        text: "We are not numbers, we are human beings with dreams and aspirations.",
        author: "Ahed Tamimi",
        category: "activism"
    },
    {
        text: "Palestine is the garden of every free person.",
        author: "Arab Proverb",
        category: "cultural"
    },
    {
        text: "The ink of the scholar is more sacred than the blood of the martyr.",
        author: "Edward Said",
        category: "academic"
    },
    {
        text: "We are the voice of the voiceless, the hope of the hopeless.",
        author: "Mariam Barghouti",
        category: "activism"
    },
    {
        text: "Our revenge will be the laughter of our children.",
        author: "Ghassan Kanafani",
        category: "resistance"
    },
    {
        text: "The Palestinian story is one of displacement, but also of steadfastness.",
        author: "Rashid Khalidi",
        category: "academic"
    },
    {
        text: "We dance in the face of oppression to show that we are still alive.",
        author: "Traditional Saying",
        category: "cultural"
    },
    {
        text: "The land doesn't belong to us, we belong to the land.",
        author: "Palestinian Proverb",
        category: "cultural"
    },
    {
        text: "Our existence is resistance.",
        author: "Popular Slogan",
        category: "resistance"
    },
    {
        text: "They have the arms, we have the justice of our cause.",
        author: "Nelson Mandela on Palestine",
        category: "solidarity"
    },
    {
        text: "The Palestinian struggle is a struggle for human dignity.",
        author: "Noam Chomsky",
        category: "solidarity"
    },
    {
        text: "We are the people of the sun, we cannot be extinguished.",
        author: "Fadwa Tuqan",
        category: "poetry"
    },
    {
        text: "My love for Palestine is my compass, guiding me through exile.",
        author: "Mahmoud Darwish",
        category: "poetry"
    },
    {
        text: "The key is our symbol, because we remember our homes.",
        author: "Palestinian Elder",
        category: "cultural"
    },
    {
        text: "We are not terrorists, we are people fighting for our freedom.",
        author: "Leila Khaled",
        category: "political"
    },
    {
        text: "The Palestinian narrative has been written in blood and tears.",
        author: "Ilan Pappé",
        category: "academic"
    },
    {
        text: "Our culture is our weapon against erasure.",
        author: "Mourid Barghouti",
        category: "cultural"
    },
    {
        text: "The stones of Palestine speak our history.",
        author: "Traditional Saying",
        category: "cultural"
    },
    {
        text: "We are the generation that will return.",
        author: "Youth Slogan",
        category: "resistance"
    },
    {
        text: "Palestine is not a conflict, it's a people.",
        author: "Susan Abulhawa",
        category: "literature"
    },
    {
        text: "Our embroidery tells the story of our villages.",
        author: "Vera Tamari",
        category: "cultural"
    },
    {
        text: "The sea remembers Palestine, even if the world forgets.",
        author: "Mahmoud Darwish",
        category: "poetry"
    },
    {
        text: "We are the descendants of Canaan, we were here before the conquerors.",
        author: "Historical Saying",
        category: "historical"
    },
    {
        text: "Every Palestinian is a storyteller, every story a testament.",
        author: "Raja Shehadeh",
        category: "literature"
    },
    {
        text: "Our resistance is not violence, it is existence.",
        author: "Youth Activist",
        category: "activism"
    },
    {
        text: "The olive tree teaches us patience and deep roots.",
        author: "Farmers' Wisdom",
        category: "cultural"
    },
    {
        text: "We carry our homeland in our hearts, wherever we go.",
        author: "Diaspora Palestinian",
        category: "cultural"
    },
    {
        text: "The Palestinian flag is not just cloth, it's our identity.",
        author: "Political Activist",
        category: "political"
    },
    {
        text: "Our poetry is our map, our memory, our home.",
        author: "Fadwa Tuqan",
        category: "poetry"
    },
    {
        text: "They can destroy our houses, but not our community.",
        author: "Gaza Resident",
        category: "resistance"
    },
    {
        text: "The Palestinian spirit cannot be imprisoned.",
        author: "Khalil al-Sakakini",
        category: "historical"
    },
    {
        text: "We are the guardians of this land for future generations.",
        author: "Land Defender",
        category: "activism"
    },
    {
        text: "Our food is our history, every dish tells a story.",
        author: "Palestinian Chef",
        category: "cultural"
    },
    {
        text: "The sun rises in Palestine for all humanity.",
        author: "Mahmoud Darwish",
        category: "poetry"
    },
    {
        text: "We are not victims, we are protagonists of our story.",
        author: "Youth Leader",
        category: "activism"
    },
    {
        text: "The Palestinian struggle is the moral compass of our time.",
        author: "Angela Davis",
        category: "solidarity"
    },
    {
        text: "Our education is our liberation.",
        author: "Palestinian Student",
        category: "activism"
    },
    {
        text: "The mountains of Palestine witness our resilience.",
        author: "Traditional Saying",
        category: "cultural"
    },
    {
        text: "We are the children of the stones, unbreakable.",
        author: "First Intifada Generation",
        category: "resistance"
    },
    {
        text: "Palestine will be free from the river to the sea.",
        author: "Popular Slogan",
        category: "political"
    },
    {
        text: "Our love for Palestine grows stronger with every injustice.",
        author: "Community Leader",
        category: "activism"
    },
    {
        text: "The Palestinian voice echoes through time, undeniable.",
        author: "Historical Narrative",
        category: "historical"
    },
    {
        text: "We are the land, and the land is us.",
        author: "Indigenous Wisdom",
        category: "cultural"
    },
    {
        text: "Our heritage is not in museums, it's in our daily lives.",
        author: "Cultural Preservationist",
        category: "cultural"
    },
    {
        text: "The Palestinian story is written in the stars, eternal.",
        author: "Poetic Saying",
        category: "poetry"
    },
    {
        text: "We are the morning that will surely come after the long night.",
        author: "Mahmoud Darwish",
        category: "poetry"
    }
];
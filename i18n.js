// ==============================
// SEDA World Cup Quiz — i18n
// Supported: en, pt, es
// Quiz questions are NEVER translated
// ==============================

const TRANSLATIONS = {
  en: {
    // Nav
    nav_quiz: "Take the Quiz",
    nav_rules: "Rules",
    nav_terms: "Terms & Conditions",
    nav_ranking: "Ranking",
    nav_why: "Why English?",
    nav_about: "About",
    nav_cta: "Start Now ⚽",

    // Hero
    hero_badge: "FIFA World Cup 2026 Edition",
    hero_title_1: "Score Goals with",
    hero_title_2: "Your English",
    hero_title_3: "at the World Cup",
    hero_subtitle: "How well do you know football vocabulary in English? Take our World Cup Quiz and discover how language can unlock the ultimate football experience! ⚽🌍",
    hero_start: "Start the Quiz",
    hero_learn: "Learn More",

    // Why English
    why_tag: "Why English Matters",
    why_title: "Language is Your <span class=\"text-gradient\">Game Changer</span>",
    why_desc: "Going to the World Cup is a dream. But imagine living it to the fullest — ordering food, making friends from every country, understanding the chants, and feeling the real vibe of the tournament.",
    feat1_title: "Understand Live Commentary",
    feat1_desc: "Follow every play, every VAR decision, and every goal celebration in English — the global language of football broadcasting.",
    feat2_title: "Connect with Fans Worldwide",
    feat2_desc: "Make lifelong friends from 48 nations. English is your passport to conversations in the stands, fan zones, and after-parties.",
    feat3_title: "Navigate Like a Local",
    feat3_desc: "From ordering street tacos in Mexico City to catching the subway in New York — English helps you move with confidence across all 16 host cities.",
    feat4_title: "Access All Content",
    feat4_desc: "Stats, highlights, press conferences, social media reactions — 90% of World Cup digital content is in English. Don't miss out!",
    feat5_title: "Travel with Ease",
    feat5_desc: "Airports, hotels, restaurants — English opens every door when you're travelling across the US, Mexico, and Canada for matches.",
    feat6_title: "Live the Full Experience",
    feat6_desc: "Reading the stadium signs, understanding safety announcements, participating in fan activities — English makes everything possible.",

    // Rules
    rules_tag: "📜 How It Works",
    rules_title: "Game <span class=\"text-gradient\">Rules</span>",
    rules_desc: "Understand the challenge and compete for amazing prizes!",
    rule_main_title: "Score + Speed = Prizes!",
    rule_main_desc: "The player who scores the <strong>most points</strong> in the <strong>least time</strong> across all 5 stages wins! The faster and more accurate you are, the higher you climb on the leaderboard.",
    rule1_title: "5 Stages",
    rule1_desc: "The quiz is divided into <strong>5 themed stages</strong>. Complete each stage to unlock the next one. Each round has 10 questions.",
    rule2_title: "20 Seconds Per Question",
    rule2_desc: "You have <strong>20 seconds</strong> to answer each question. The faster you answer correctly, the better your time ranking!",
    rule3_title: "Accumulated Score",
    rule3_desc: "Your total score adds up across all stages. Each correct answer = 1 point. Maximum possible: <strong>50 points</strong> (10 per stage).",
    rule4_title: "Prizes for Top Players",
    rule4_desc: "The players with the best scores and fastest times will win <strong>exclusive prizes</strong>. More details in the terms and conditions.",

    // Ranking
    rank_tag: "🏅 Leaderboard",
    rank_title: "Player <span class=\"text-gradient\">Ranking</span>",
    rank_desc: "See who's leading the World Cup English Quiz! Top scorers with the fastest times climb the rankings.",

    // Quiz section
    quiz_tag: "⚽ The Challenge",
    quiz_title: "World Cup <span class=\"text-gradient\">English Quiz</span>",
    quiz_desc: "10 questions per stage mixing football passion with English knowledge. Complete each stage to unlock the next!",

    // Start screen
    start_title: "Ready to kick off?",
    start_desc: "Test your English and football vocabulary. Each question has 4 options and you have <strong>20 seconds</strong> per question. Good luck!",
    start_btn: "Kick Off! ⚽",

    // Register form
    reg_title: "Register to Play",
    reg_desc: "Fill in your details to start the World Cup English Quiz!",
    reg_name: "Full Name *",
    reg_name_ph: "Your full name",
    reg_city: "City *",
    reg_city_ph: "Your city",
    reg_country: "Country *",
    reg_country_ph: "Select your country",
    reg_email: "Email *",
    reg_email_ph: "your@email.com",
    reg_phone: "Phone *",
    reg_phone_ph: "+55 (00) 00000-0000",
    reg_terms: "I agree to the <a href=\"https://docs.google.com/document/d/16ZWbLFf1XpXmdFU7uTFE-rIVM93WvQSLQQYCm5XdzP0/edit?usp=sharing\" target=\"_blank\">Terms & Conditions</a> *",
    reg_submit: "Start the Quiz! ⚽",
    reg_back: "← Back",

    // Stage labels
    stage1: "Stage 1",
    stage2: "Stage 2",
    stage3: "Stage 3",
    stage4: "Stage 4",
    stage5: "Final Stage",

    // Leaderboard table
    lb_pos: "#",
    lb_player: "Player",
    lb_city: "City",
    lb_country: "Country",
    lb_score: "Score",
    lb_time: "Avg Time",
    lb_empty: "No players yet. Be the first to take the quiz and enter the rankings!",

    // Results
    res_accumulated: "🏅 Total Accumulated Score",
    res_across: "across {n} stage",
    res_across_plural: "across {n} stages",
    res_next_cta: "Want to improve your English for the World Cup?",
    res_seda: "Study at SEDA College 🎓",

    // CTA Section
    cta_badge: "🇮🇪 SEDA College — Dublin, Ireland",
    cta_title: "Don't just watch the World Cup.<br><span class=\"text-gradient\">Live it in English.</span>",
    cta_desc: "SEDA College has been helping students from all over the world achieve fluency in English since 2009. Whether you want to travel, work, or cheer at the World Cup — we've got you covered.",
    cta_btn: "Discover SEDA College 🎓",

    // Footer
    footer_tagline: "Empowering students worldwide through quality English education since 2009.",
    footer_quick: "Quick Links",
    footer_wc: "World Cup 2026",
    footer_website: "Official Website",
    footer_courses: "Courses",
    footer_contact: "Contact",
    footer_quiz: "Take the Quiz",
    footer_why: "Why English?",
    footer_ranking: "Player Ranking",
    footer_copy: "© 2026 SEDA College. All rights reserved. | A campaign by SEDA College Dublin 🇮🇪",

    // Validation errors
    err_name_req: "⚠️ Name is required",
    err_name_short: "⚠️ Please enter your full name (at least 3 characters)",
    err_name_num: "⚠️ Name should not contain numbers",
    err_city_req: "⚠️ City is required",
    err_city_short: "⚠️ Please enter a valid city name",
    err_country_req: "⚠️ Please select your country",
    err_email_req: "⚠️ Email is required",
    err_email_invalid: "⚠️ Please enter a valid email address (e.g. name@email.com)",
    err_email_fake: "⚠️ Please enter your real email address",
    err_phone_req: "⚠️ Phone number is required",
    err_phone_invalid: "⚠️ Phone should contain only numbers",
    err_phone_short: "⚠️ Please enter a valid phone number (at least 7 digits)",
    err_phone_fake: "⚠️ Please enter your real phone number",
    err_terms: "⚠️ You must accept the Terms & Conditions",
  },

  pt: {
    nav_quiz: "Fazer o Quiz",
    nav_rules: "Regras",
    nav_terms: "Termos e Condições",
    nav_ranking: "Ranking",
    nav_why: "Por que Inglês?",
    nav_about: "Sobre",
    nav_cta: "Começar ⚽",

    hero_badge: "FIFA Copa do Mundo 2026",
    hero_title_1: "Marque Gols com",
    hero_title_2: "Seu Inglês",
    hero_title_3: "na Copa do Mundo",
    hero_subtitle: "Você conhece o vocabulário de futebol em inglês? Faça nosso Quiz da Copa e descubra como o idioma pode transformar sua experiência! ⚽🌍",
    hero_start: "Iniciar o Quiz",
    hero_learn: "Saiba Mais",

    why_tag: "Por que o Inglês Importa",
    why_title: "O Idioma é seu <span class=\"text-gradient\">Diferencial</span>",
    why_desc: "Ir à Copa do Mundo é um sonho. Mas imagine vivê-la ao máximo — pedindo comida, fazendo amigos de todo o mundo, entendendo os cânticos e sentindo a vibração real do torneio.",
    feat1_title: "Entenda a Narração ao Vivo",
    feat1_desc: "Acompanhe cada jogada, cada decisão do VAR e cada comemoração de gol em inglês — o idioma global do futebol.",
    feat2_title: "Conecte-se com Torcedores do Mundo Todo",
    feat2_desc: "Faça amizades eternas com 48 nações. O inglês é seu passaporte para conversas nas arquibancadas, fan zones e festas.",
    feat3_title: "Navegue como um Local",
    feat3_desc: "De pedir tacos no México a pegar o metrô em Nova York — o inglês te ajuda a se mover com confiança pelas 16 cidades-sede.",
    feat4_title: "Acesse Todo o Conteúdo",
    feat4_desc: "Estatísticas, melhores momentos, coletivas — 90% do conteúdo digital da Copa está em inglês. Não fique de fora!",
    feat5_title: "Viaje com Tranquilidade",
    feat5_desc: "Aeroportos, hotéis, restaurantes — o inglês abre todas as portas nos EUA, México e Canadá.",
    feat6_title: "Viva a Experiência Completa",
    feat6_desc: "Ler as placas do estádio, entender os anúncios de segurança, participar das atividades — o inglês torna tudo possível.",

    rules_tag: "📜 Como Funciona",
    rules_title: "Regras do <span class=\"text-gradient\">Jogo</span>",
    rules_desc: "Entenda o desafio e concorra a prêmios incríveis!",
    rule_main_title: "Pontuação + Velocidade = Prêmios!",
    rule_main_desc: "O jogador que marcar <strong>mais pontos</strong> no <strong>menor tempo</strong> em todas as 5 fases vence! Quanto mais rápido e preciso você for, mais alto sobe no ranking.",
    rule1_title: "5 Fases",
    rule1_desc: "O quiz é dividido em <strong>5 fases temáticas</strong>. Complete cada fase para desbloquear a próxima. Cada rodada tem 10 perguntas.",
    rule2_title: "20 Segundos por Pergunta",
    rule2_desc: "Você tem <strong>20 segundos</strong> para responder cada pergunta. Quanto mais rápido acertar, melhor seu ranking de tempo!",
    rule3_title: "Pontuação Acumulada",
    rule3_desc: "Sua pontuação total soma em todas as fases. Cada resposta certa = 1 ponto. Máximo possível: <strong>50 pontos</strong> (10 por fase).",
    rule4_title: "Prêmios para os Melhores",
    rule4_desc: "Os jogadores com melhores pontuações e tempos mais rápidos ganharão <strong>prêmios exclusivos</strong>. Mais detalhes nos termos e condições.",

    rank_tag: "🏅 Placar",
    rank_title: "Ranking de <span class=\"text-gradient\">Jogadores</span>",
    rank_desc: "Veja quem está liderando o Quiz de Inglês da Copa! Os melhores pontuadores com os tempos mais rápidos sobem no ranking.",

    quiz_tag: "⚽ O Desafio",
    quiz_title: "Quiz de Inglês da <span class=\"text-gradient\">Copa do Mundo</span>",
    quiz_desc: "10 perguntas por fase misturando paixão pelo futebol com conhecimento de inglês. Complete cada fase para desbloquear a próxima!",

    start_title: "Pronto para o Pontapé Inicial?",
    start_desc: "Teste seu vocabulário de inglês e futebol. Cada pergunta tem 4 opções e você tem <strong>20 segundos</strong> por pergunta. Boa sorte!",
    start_btn: "Começar! ⚽",

    reg_title: "Cadastre-se para Jogar",
    reg_desc: "Preencha seus dados para começar o Quiz de Inglês da Copa!",
    reg_name: "Nome Completo *",
    reg_name_ph: "Seu nome completo",
    reg_city: "Cidade *",
    reg_city_ph: "Sua cidade",
    reg_country: "País *",
    reg_country_ph: "Selecione seu país",
    reg_email: "Email *",
    reg_email_ph: "seu@email.com",
    reg_phone: "Telefone *",
    reg_phone_ph: "+55 (00) 00000-0000",
    reg_terms: "Eu aceito os <a href=\"https://docs.google.com/document/d/16ZWbLFf1XpXmdFU7uTFE-rIVM93WvQSLQQYCm5XdzP0/edit?usp=sharing\" target=\"_blank\">Termos e Condições</a> *",
    reg_submit: "Começar o Quiz! ⚽",
    reg_back: "← Voltar",

    stage1: "1ª Fase",
    stage2: "2ª Fase",
    stage3: "3ª Fase",
    stage4: "4ª Fase",
    stage5: "Fase Final",

    lb_pos: "#",
    lb_player: "Jogador",
    lb_city: "Cidade",
    lb_country: "País",
    lb_score: "Pontos",
    lb_time: "Tempo Médio",
    lb_empty: "Nenhum jogador ainda. Seja o primeiro a fazer o quiz e entrar no ranking!",

    res_accumulated: "🏅 Pontuação Total Acumulada",
    res_across: "em {n} fase",
    res_across_plural: "em {n} fases",
    res_next_cta: "Quer melhorar seu inglês para a Copa do Mundo?",
    res_seda: "Estude na SEDA College 🎓",

    cta_badge: "🇮🇪 SEDA College — Dublin, Irlanda",
    cta_title: "Não apenas assista à Copa do Mundo.<br><span class=\"text-gradient\">Viva em inglês.</span>",
    cta_desc: "A SEDA College ajuda estudantes de todo o mundo a alcançar fluência em inglês desde 2009. Seja para viajar, trabalhar ou torcer na Copa — estamos aqui por você.",
    cta_btn: "Conheça a SEDA College 🎓",

    footer_tagline: "Capacitando estudantes do mundo todo com educação de qualidade em inglês desde 2009.",
    footer_quick: "Links Rápidos",
    footer_wc: "Copa do Mundo 2026",
    footer_website: "Site Oficial",
    footer_courses: "Cursos",
    footer_contact: "Contato",
    footer_quiz: "Fazer o Quiz",
    footer_why: "Por que Inglês?",
    footer_ranking: "Ranking de Jogadores",
    footer_copy: "© 2026 SEDA College. Todos os direitos reservados. | Uma campanha da SEDA College Dublin 🇮🇪",

    err_name_req: "⚠️ Nome é obrigatório",
    err_name_short: "⚠️ Por favor, insira seu nome completo (mínimo 3 caracteres)",
    err_name_num: "⚠️ O nome não deve conter números",
    err_city_req: "⚠️ Cidade é obrigatória",
    err_city_short: "⚠️ Por favor, insira um nome de cidade válido",
    err_country_req: "⚠️ Por favor, selecione seu país",
    err_email_req: "⚠️ Email é obrigatório",
    err_email_invalid: "⚠️ Por favor, insira um email válido (ex: nome@email.com)",
    err_email_fake: "⚠️ Por favor, insira seu email real",
    err_phone_req: "⚠️ Telefone é obrigatório",
    err_phone_invalid: "⚠️ Telefone deve conter apenas números",
    err_phone_short: "⚠️ Por favor, insira um número de telefone válido (mínimo 7 dígitos)",
    err_phone_fake: "⚠️ Por favor, insira seu telefone real",
    err_terms: "⚠️ Você deve aceitar os Termos e Condições",
  },

  es: {
    nav_quiz: "Hacer el Quiz",
    nav_rules: "Reglas",
    nav_terms: "Términos y Condiciones",
    nav_ranking: "Ranking",
    nav_why: "¿Por qué Inglés?",
    nav_about: "Acerca de",
    nav_cta: "Empezar ⚽",

    hero_badge: "FIFA Copa del Mundo 2026",
    hero_title_1: "Anota Goles con",
    hero_title_2: "Tu Inglés",
    hero_title_3: "en la Copa del Mundo",
    hero_subtitle: "¿Qué tan bien conoces el vocabulario de fútbol en inglés? ¡Haz nuestro Quiz de la Copa y descubre cómo el idioma puede transformar tu experiencia! ⚽🌍",
    hero_start: "Iniciar el Quiz",
    hero_learn: "Saber Más",

    why_tag: "Por qué Importa el Inglés",
    why_title: "El Idioma es tu <span class=\"text-gradient\">Ventaja</span>",
    why_desc: "Ir al Mundial es un sueño. Pero imagina vivirlo al máximo — pidiendo comida, haciendo amigos de todo el mundo, entendiendo los cánticos y sintiendo la vibra real del torneo.",
    feat1_title: "Entiende la Narración en Vivo",
    feat1_desc: "Sigue cada jugada, cada decisión del VAR y cada celebración de gol en inglés — el idioma global del fútbol.",
    feat2_title: "Conéctate con Aficionados del Mundo",
    feat2_desc: "Haz amigos de 48 naciones. El inglés es tu pasaporte para conversaciones en las gradas, zonas de fans y fiestas.",
    feat3_title: "Navega como un Local",
    feat3_desc: "Desde pedir tacos en Ciudad de México hasta tomar el metro en Nueva York — el inglés te ayuda a moverte con confianza.",
    feat4_title: "Accede a Todo el Contenido",
    feat4_desc: "Estadísticas, resúmenes, ruedas de prensa — el 90% del contenido digital del Mundial está en inglés. ¡No te lo pierdas!",
    feat5_title: "Viaja con Facilidad",
    feat5_desc: "Aeropuertos, hoteles, restaurantes — el inglés abre todas las puertas en EE.UU., México y Canadá.",
    feat6_title: "Vive la Experiencia Completa",
    feat6_desc: "Leer los carteles del estadio, entender los anuncios de seguridad, participar en actividades — el inglés lo hace todo posible.",

    rules_tag: "📜 Cómo Funciona",
    rules_title: "Reglas del <span class=\"text-gradient\">Juego</span>",
    rules_desc: "¡Entiende el desafío y compite por increíbles premios!",
    rule_main_title: "¡Puntuación + Velocidad = Premios!",
    rule_main_desc: "¡El jugador que anote <strong>más puntos</strong> en el <strong>menor tiempo</strong> en las 5 etapas gana! Cuanto más rápido y preciso seas, más alto subirás en el ranking.",
    rule1_title: "5 Etapas",
    rule1_desc: "El quiz está dividido en <strong>5 etapas temáticas</strong>. Completa cada etapa para desbloquear la siguiente. Cada ronda tiene 10 preguntas.",
    rule2_title: "20 Segundos por Pregunta",
    rule2_desc: "Tienes <strong>20 segundos</strong> para responder cada pregunta. ¡Cuanto más rápido respondas correctamente, mejor será tu ranking de tiempo!",
    rule3_title: "Puntuación Acumulada",
    rule3_desc: "Tu puntuación total se suma en todas las etapas. Cada respuesta correcta = 1 punto. Máximo posible: <strong>50 puntos</strong> (10 por etapa).",
    rule4_title: "Premios para los Mejores",
    rule4_desc: "Los jugadores con mejores puntuaciones y tiempos más rápidos ganarán <strong>premios exclusivos</strong>. Más detalles en los términos y condiciones.",

    rank_tag: "🏅 Marcador",
    rank_title: "Ranking de <span class=\"text-gradient\">Jugadores</span>",
    rank_desc: "¡Mira quién lidera el Quiz de Inglés del Mundial! Los mejores puntuadores con los tiempos más rápidos escalan en el ranking.",

    quiz_tag: "⚽ El Desafío",
    quiz_title: "Quiz de Inglés del <span class=\"text-gradient\">Mundial</span>",
    quiz_desc: "10 preguntas por etapa mezclando pasión por el fútbol con conocimiento del inglés. ¡Completa cada etapa para desbloquear la siguiente!",

    start_title: "¿Listo para el Saque Inicial?",
    start_desc: "Pon a prueba tu vocabulario de inglés y fútbol. Cada pregunta tiene 4 opciones y tienes <strong>20 segundos</strong> por pregunta. ¡Buena suerte!",
    start_btn: "¡Empezar! ⚽",

    reg_title: "Regístrate para Jugar",
    reg_desc: "¡Completa tus datos para comenzar el Quiz de Inglés del Mundial!",
    reg_name: "Nombre Completo *",
    reg_name_ph: "Tu nombre completo",
    reg_city: "Ciudad *",
    reg_city_ph: "Tu ciudad",
    reg_country: "País *",
    reg_country_ph: "Selecciona tu país",
    reg_email: "Email *",
    reg_email_ph: "tu@email.com",
    reg_phone: "Teléfono *",
    reg_phone_ph: "+55 (00) 00000-0000",
    reg_terms: "Acepto los <a href=\"https://docs.google.com/document/d/16ZWbLFf1XpXmdFU7uTFE-rIVM93WvQSLQQYCm5XdzP0/edit?usp=sharing\" target=\"_blank\">Términos y Condiciones</a> *",
    reg_submit: "¡Comenzar el Quiz! ⚽",
    reg_back: "← Volver",

    stage1: "Etapa 1",
    stage2: "Etapa 2",
    stage3: "Etapa 3",
    stage4: "Etapa 4",
    stage5: "Etapa Final",

    lb_pos: "#",
    lb_player: "Jugador",
    lb_city: "Ciudad",
    lb_country: "País",
    lb_score: "Puntos",
    lb_time: "Tiempo Prom.",
    lb_empty: "Aún no hay jugadores. ¡Sé el primero en hacer el quiz y entrar en el ranking!",

    res_accumulated: "🏅 Puntuación Total Acumulada",
    res_across: "en {n} etapa",
    res_across_plural: "en {n} etapas",
    res_next_cta: "¿Quieres mejorar tu inglés para el Mundial?",
    res_seda: "Estudia en SEDA College 🎓",

    cta_badge: "🇮🇪 SEDA College — Dublín, Irlanda",
    cta_title: "No solo veas el Mundial.<br><span class=\"text-gradient\">Vívelo en inglés.</span>",
    cta_desc: "SEDA College ha ayudado a estudiantes de todo el mundo a alcanzar la fluidez en inglés desde 2009. Ya sea para viajar, trabajar o alentar en el Mundial — estamos aquí para ti.",
    cta_btn: "Descubre SEDA College 🎓",

    footer_tagline: "Potenciando estudiantes de todo el mundo con educación de calidad en inglés desde 2009.",
    footer_quick: "Enlaces Rápidos",
    footer_wc: "Copa del Mundo 2026",
    footer_website: "Sitio Oficial",
    footer_courses: "Cursos",
    footer_contact: "Contacto",
    footer_quiz: "Hacer el Quiz",
    footer_why: "¿Por qué Inglés?",
    footer_ranking: "Ranking de Jugadores",
    footer_copy: "© 2026 SEDA College. Todos los derechos reservados. | Una campaña de SEDA College Dublín 🇮🇪",

    err_name_req: "⚠️ El nombre es obligatorio",
    err_name_short: "⚠️ Por favor ingresa tu nombre completo (mínimo 3 caracteres)",
    err_name_num: "⚠️ El nombre no debe contener números",
    err_city_req: "⚠️ La ciudad es obligatoria",
    err_city_short: "⚠️ Por favor ingresa un nombre de ciudad válido",
    err_country_req: "⚠️ Por favor selecciona tu país",
    err_email_req: "⚠️ El email es obligatorio",
    err_email_invalid: "⚠️ Por favor ingresa un email válido (ej: nombre@email.com)",
    err_email_fake: "⚠️ Por favor ingresa tu email real",
    err_phone_req: "⚠️ El teléfono es obligatorio",
    err_phone_invalid: "⚠️ El teléfono solo debe contener números",
    err_phone_short: "⚠️ Por favor ingresa un número de teléfono válido (mínimo 7 dígitos)",
    err_phone_fake: "⚠️ Por favor ingresa tu teléfono real",
    err_terms: "⚠️ Debes aceptar los Términos y Condiciones",
  }
};

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Belarus","Belgium","Belize","Benin","Bolivia","Bosnia and Herzegovina","Botswana",
  "Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic",
  "Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia",
  "Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Guatemala","Guinea","Guinea-Bissau",
  "Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon",
  "Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
  "Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia",
  "Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
  "Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar",
  "Romania","Russia","Rwanda","Saudi Arabia","Senegal","Serbia","Sierra Leone","Singapore","Slovakia","Slovenia",
  "Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland",
  "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam",
  "Yemen","Zambia","Zimbabwe"
];

window.i18n = {
  current: localStorage.getItem('sedaQuiz_lang') || 'en',

  t(key) {
    return TRANSLATIONS[this.current]?.[key] || TRANSLATIONS['en'][key] || key;
  },

  setLang(lang) {
    this.current = lang;
    localStorage.setItem('sedaQuiz_lang', lang);
    this.applyAll();
    // Re-render quiz components that depend on language
    if (window.quiz) {
      window.quiz.renderWeekSelector();
      window.quiz.renderLeaderboard();
    }
  },

  applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.innerHTML = this.t(key);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPh);
    });
    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  },

  getCountries() { return COUNTRIES; }
};

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
// import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import image11 from './image11.jpg';
import image12 from './image12.jpg';
import image13 from './image13.jpg';
import image14 from './image14.jpg';
import image15 from './image15.jpg';
import image16 from './image16.jpg';
import image17 from './image17.jpg';
import image18 from './image18.jpg';
import image19 from './image19.jpg';
import image20 from './image20.jpg';
import image21 from './image21.jpg';
import image22 from './image22.jpg';
import image23 from './image23.jpg';
import image24 from './image24.jpg';
import image25 from './image25.jpg';
import image26 from './image26.jpg';
import image27 from './image27.jpg';
import image28 from './image28.jpg';
import image29 from './image29.jpg';
import image30 from './image30.jpg';
import image31 from './image31.jpg';
import image32 from './image32.jpg';
import image33 from './image33.jpg';
import image34 from './image34.jpg';
import image35 from './image35.jpg';
import image36 from './image36.jpg';
import image37 from './image37.jpg';
import image38 from './image38.jpg';
import image39 from './image39.jpg';
import image40 from './image40.jpg';
import image41 from './image41.jpg';
import image42 from './image42.jpg';
import Gazhali from './Ghazali.png';
import Ahamdou from './Ahmadou.png';
import Senghor from './Seghor.jpg';
import souleymane from "./Souleymane.png";


// ------------------------------------------

export const authors = [
  {
      id: 1,
      name: "Cheikh Ahmadou Bamba",
      description: "🕌 Fondateur du mouridisme, un mouvement spirituel et religieux basé au Sénégal. ✍️ Auteur de nombreux poèmes et écrits spirituels qui encouragent la dévotion, le travail et la paix.",
      dateOfBirth: "1853 📅",
      image: Ahamdou,
      dateOfDeath: "1927 🕊️",
      nationality: "🇸🇳 Sénégalaise",
      notableWorks: [
          "📖 Massalik al-Jinan",
          "📖 Mawaahibu Nafih",
          "📖 Matlabul Fawzayni"
      ]
  },
  {
      id: 2,
      name: "Imam Gazhali",
      description: "📚 Philosophe, théologien et soufi persan du XIe siècle. 💡 Connu pour ses travaux influents en théologie islamique, philosophie, et mysticisme.",
      dateOfBirth: "1058 📅",
      image: Gazhali,
      dateOfDeath: "1111 🕊️",
      nationality: "🇮🇷 Persane",
      notableWorks: [
          "📖 Revival of the Religious Sciences (Ihya' Ulum al-Din)",
          "📖 The Incoherence of the Philosophers",
          "📖 The Alchemy of Happiness"
      ]
  },
  {
      id: 3,
      name: "Léopold Sédar Senghor",
      description: "🖋️ Poète, écrivain et premier président du Sénégal. 🌍 Connu comme l'un des fondateurs de la Négritude, un mouvement littéraire célébrant les cultures africaines.",
      dateOfBirth: "9 octobre 1906 📅",
      image: Senghor,
      dateOfDeath: "20 décembre 2001 🕊️",
      nationality: "🇸🇳 Sénégalaise",
      notableWorks: [
          "📖 Chants d'ombre",
          "📖 Éthiopiques",
          "📖 Hosties noires"
      ]
  },
  {
      id: 4,
      name: "Souleymane Bachir Diagne",
      description: "🤔 Philosophe sénégalais contemporain, spécialisé en philosophie islamique, en mathématiques et en épistémologie.",
      dateOfBirth: "8 novembre 1955 📅",
      image: souleymane,
      dateOfDeath: "En vie 🌟",
      nationality: "🇸🇳 Sénégalaise",
      notableWorks: [
          "📖 Comment philosopher en islam",
          "📖 Bergson postcolonial",
          "📖 L'encre des savants"
      ]
  }
  // {
  //     id: 5,
  //     name: "Robert T. Kiyosaki",
  //     description: "💼 Entrepreneur, investisseur et auteur américain. 🏦 Connu pour ses ouvrages sur l'éducation financière et le développement personnel.",
  //     dateOfBirth: "8 avril 1947 📅",
  //     image: image7,
  //     nationality: "🇺🇸 Américaine",
  //     notableWorks: [
  //         "📖 Rich Dad Poor Dad",
  //         "📖 The Cashflow Quadrant",
  //         "📖 Retire Young Retire Rich"
  //     ]
  // },
  // {
  //     id: 6,
  //     name: "Mariama Bâ",
  //     description: "✊ Écrivaine sénégalaise connue pour ses œuvres qui abordent les défis des femmes dans les sociétés africaines patriarcales.",
  //     dateOfBirth: "17 avril 1929 📅",
  //     image: image7,
  //     dateOfDeath: "17 août 1981 🕊️",
  //     nationality: "🇸🇳 Sénégalaise",
  //     notableWorks: [
  //         "📖 Une si longue lettre",
  //         "📖 Le Chant écarlate"
  //     ]
  // }
];






export const books = [
        {
            id: 13,
            title: "Père riche, père pauvre",
            author: "Robert T. Kiyosaki",
            description: "Un ouvrage culte qui compare deux visions de l'argent et de l'éducation financière à travers l'expérience personnelle de l'auteur.",
            price: 7.0,
            category: "Affaires",
            coverImage: image1,
            BestSellers:false,
            rating: 4.5,
            reviews: [
              "Une révélation sur la gestion financière.",
              "Un must-read pour comprendre la richesse.",
              "Des concepts expliqués simplement mais avec profondeur."
            ]
          },
          {
            id: 14,
            title: "Atomic Habits",
            author: "James Clear",
            description: "Un guide pratique pour transformer vos habitudes et atteindre vos objectifs de manière progressive mais durable.",
            price: 8.0,
            category: "Développement personnel",
            coverImage: image2,
            BestSellers:false,
            rating: 4.8,
            reviews: [
              "Des conseils concrets et applicables immédiatement.",
              "Une lecture captivante pour changer sa vie.",
              "Un excellent livre pour comprendre l'importance des petites actions quotidiennes."
            ]
          },
          {
            id: 15,
            title: "The Low Hanging Fruit of Innovation",
            author: "Scott Anthony",
            description: "Une exploration des opportunités d'innovation accessibles et comment les saisir pour transformer les idées en résultats.",
            price: 9.0,
            category: "Innovation",
            coverImage: image3,
            BestSellers:false,
            rating: 4.2,
            reviews: [
              "Une approche pragmatique de l'innovation.",
              "Inspirant pour les entrepreneurs et les innovateurs.",
              "Des cas concrets qui montrent comment les petites idées peuvent générer un grand impact."
            ]
          },
          {
            id: 16,
            title: "Nations Nègres et Culture",
            author: "Cheikh Anta Diop",
            description: "Un chef-d'œuvre qui redéfinit l'histoire et la contribution des civilisations africaines à l'humanité.",
            price: 10.0,
            category: "Histoire",
            coverImage: image4,
            BestSellers:false,
            rating: 4.7,
            reviews: [
              "Un ouvrage essentiel pour comprendre l'Afrique.",
              "Une profondeur d'analyse impressionnante.",
              "Une leçon de courage intellectuel et de rigueur scientifique."
            ]
          },
          {
            id: 17,
            title: "L'Africain a encore le choix",
            author: "Alfred Nzo",
            description: "Une réflexion pertinente sur les défis actuels de l'Afrique et les chemins possibles vers son développement.",
            price: 11.0,
            category: "Histoire",
            coverImage: image5,
            BestSellers:false,
            rating: 4.5,
            reviews: [
              "Un appel inspirant à l'action.",
              "Des perspectives novatrices sur l'avenir du continent.",
              "Un livre qui donne espoir et motivation."
            ]
          },
          {
            id: 18,
            title: "L'Émotion et la Raison",
            author: "Léopold Sédar Senghor",
            description: "Une réflexion poétique et philosophique sur les tensions et harmonies entre émotion et raison dans la quête humaine.",
            price: 12.0,
            category: "Philosophie",
            coverImage: image6,
            BestSellers:false,
            rating: 4.6,
            reviews: [
              "Une prose captivante et profondément philosophique.",
              "Un voyage dans l'âme humaine.",
              "Une fusion élégante entre culture et réflexion."
            ]
          },
          {
            id: 19,
            title: "Une si longue lettre",
            author: "Mariama Bâ",
            description: "Un roman poignant qui explore les défis, les sacrifices et la résilience des femmes africaines à travers le récit intime d'une femme.",
            price: 13.0,
            category: "Roman",
            coverImage: image8,
            BestSellers:false,
            
            rating: 4.9,
            reviews: [
              "Un témoignage bouleversant sur la condition féminine.",
              "Une écriture poignante et sincère.",
              "Une lecture essentielle pour comprendre les luttes des femmes africaines."
            ]
          },
          {
            id: 20,
            title: "La Souffrance: Une clé de lecture pour Oeuvres Romanesques",
            author: "Mariama Bâ",
            description: "À travers une plume délicate et incisive, Mariama Bâ explore la souffrance comme moteur narratif et thématique dans les œuvres romanesques africaines. Ce livre propose une réflexion profonde sur les émotions humaines, les contextes culturels et les réalités sociales souvent ignorées, offrant une clé de lecture précieuse pour appréhender la richesse des romans africains.",
            price: 14.0,
            category: "Roman",
            coverImage: image9,
            BestSellers:false,
            rating: 4.5,
            reviews: [
                "Une œuvre qui transcende les barrières culturelles pour révéler des vérités universelles.",
                "Mariama Bâ livre une analyse poignante et inoubliable.",
                "Ce livre m'a permis de mieux comprendre les subtilités de la littérature africaine."
            ]
        },
        {
            id: 21,
            title: "L'Islam Rationnel",
            author: "Souleymane Bachir Diagne",
            description: "Souleymane Bachir Diagne propose une exploration audacieuse et érudite de l'interaction entre foi et raison dans l'Islam. En revisitant les traditions philosophiques islamiques et occidentales, l'auteur met en lumière les connexions intellectuelles et spirituelles qui peuvent réconcilier la modernité et les croyances religieuses.",
            price: 15.0,
            category: "Philosophie",
            coverImage: image10,
            BestSellers:false,
            rating: 4.8,
            reviews: [
                "Un regard neuf et éclairé sur la pensée islamique.",
                "Ce livre m'a aidé à poser un regard critique sur ma propre foi.",
                "Une lecture incontournable pour comprendre l'Islam contemporain."
            ]
        },
        {
            id: 22,
            title: "Ubuntu",
            author: "Souleymane Bachir Diagne",
            description: "Avec 'Ubuntu', Souleymane Bachir Diagne explore le concept africain de l'humanisme et de la communauté, tout en réfléchissant sur ses implications éthiques et philosophiques. Cet ouvrage fait écho aux valeurs universelles de respect et de solidarité, nous invitant à adopter une approche plus collective de l'existence.",
            price: 16.0,
            category: "Philosophie",
            coverImage: image11,
            BestSellers:false,
            rating: 4.7,
            reviews: [
                "Une œuvre inspirante qui résonne bien au-delà des frontières africaines.",
                "L'auteur nous rappelle l'importance des valeurs humaines dans un monde fragmenté.",
                "Une philosophie qui mérite d'être adoptée au quotidien."
            ]
        },
        {
            id: 23,
            title: "Idée et Savoir",
            author: "Souleymane Bachir Diagne",
            description: "Ce livre nous plonge dans une réflexion sur la construction et la transmission du savoir, en mêlant philosophie classique et contemporaine. Souleymane Bachir Diagne invite ses lecteurs à considérer les idées comme des outils de transformation et d'évolution, autant personnelle que collective.",
            price: 17.0,
            category: "Philosophie",
            coverImage: image12,
            BestSellers:false,
            rating: 4.6,
            reviews: [
                "Un livre qui m'a fait redécouvrir l'importance du questionnement.",
                "L'approche de l'auteur est à la fois accessible et rigoureusement intellectuelle.",
                "Une œuvre essentielle pour les amateurs de philosophie."
            ]
        },
        {
            id: 24,
            title: "Lève-toi et Code",
            author: "Rabbin des Bois",
            description: "Avec humour et pédagogie, 'Lève-toi et Code' motive les lecteurs à se lancer dans le monde du développement informatique. Cet ouvrage aborde les concepts fondamentaux du code tout en racontant des anecdotes amusantes et des expériences pratiques pour mieux comprendre l'importance du codage aujourd'hui.",
            price: 18.0,
            category: "Programmation",
            coverImage: image13,
            BestSellers:false,
            rating: 4.4,
            reviews: [
                "Une lecture qui rend le code accessible et amusant.",
                "Ce livre m'a donné la confiance nécessaire pour apprendre la programmation.",
                "Pédagogique, clair et rempli d'exemples pratiques."
            ]
        },
            {
              id: 25,
              title: "Apprendre à programmer avec Python",
              author: "Gerard Swinnen",
              description: "Ce livre est une ressource essentielle pour tous ceux qui souhaitent se lancer dans l'apprentissage de la programmation avec Python. Gerard Swinnen guide le lecteur à travers les bases du langage Python, en abordant des concepts fondamentaux et en proposant des exemples concrets pour mieux comprendre la programmation informatique. Parfait pour les débutants comme pour les développeurs en herbe, ce livre rend Python accessible et facile à maîtriser.",
              price: 19.0,
              category: "Programmation",
              coverImage: image14,
              bestSellers: true,
              rating: 4.0,
              reviews: [
                "Un livre qui change la vie.",
                "Très inspirant et motivant.",
                "Des idées profondes sur la programmation avec Python."
              ],
            },
            {
              id: 26,
              title: "Programmation en Python pour les mathématiques",
              author: "Alexandre Drouin",
              description: "Ce livre unique en son genre permet de lier la programmation Python à l'univers des mathématiques. Alexandre Drouin explore des applications pratiques de Python pour résoudre des problèmes mathématiques complexes, que ce soit pour des calculs algébriques, des analyses statistiques ou des simulations. Il est conçu pour les étudiants, chercheurs, ou toute personne intéressée par l'utilisation de Python pour des applications scientifiques et mathématiques.",
              price: 20.0,
              category: "Programmation",
              coverImage: image15,
              bestSellers: true,
              rating: 4.0,
              reviews: [
                "Un livre qui change la vie.",
                "Très inspirant et motivant.",
                "Des idées profondes sur la programmation en Python."
              ]
            },
            {
              id: 28,
              title: "React JS",
              author: "Tim Simone",
              description: "React JS est un framework JavaScript incontournable pour le développement d'applications web modernes. Tim Simone plonge le lecteur dans l'univers de React, en expliquant comment construire des interfaces utilisateur réactives et dynamiques. À travers ce livre, les développeurs apprendront à maîtriser les composants, le routage, l'état local et global, et bien d'autres concepts clés de React JS pour créer des applications performantes et robustes.",
              price: 22.0,
              category: "Programmation",
              coverImage: image16,
              bestSellers: true,
              rating: 4.0,
              reviews: [
                "Un livre qui change la vie.",
                "Très inspirant et motivant.",
                "Des idées profondes sur la programmation en React JS."
              ]
            },
            {
              id: 29,
              title: "React: Développer le Frontend de vos applications web",
              author: "Sebastien Castiel",
              description: "Dans ce livre, Sebastien Castiel explore en profondeur le développement d'applications frontend en utilisant React. Il aborde les bases du framework, la gestion de l'état avec Redux, l'intégration des API, ainsi que la création de composants réutilisables. Ce livre est destiné aux développeurs souhaitant créer des applications web réactives, évolutives et maintenables avec React, tout en approfondissant leurs connaissances des bonnes pratiques du développement moderne.",
              price: 23.0,
              category: "Programmation",
              coverImage: image17,
              BestSellers:true,
              rating: 4.0,
              reviews: [
                "Un livre qui change la vie.",
                "Très inspirant et motivant.",
                "Des idées profondes sur la programmation en React JS."
              ],
             
            },
            {
              id: 30,
              title: "Clean Code",
              author: "Robert C. Martin",
              description: "Clean Code est un livre incontournable pour les développeurs souhaitant améliorer la qualité de leur code. Robert C. Martin, une figure de proue dans l'industrie du développement logiciel, enseigne l'importance de l'écriture de code propre, lisible et maintenable. À travers des exemples concrets, il fournit des principes, des techniques et des bonnes pratiques pour écrire du code de qualité, comprendre les refactorisations nécessaires et éviter les erreurs courantes qui compromettent la performance à long terme.",
              price: 24.0,
              category: "Programmation",
              coverImage: image18,
              BestSellers:true,
              rating: 4.0,
              reviews: [
                "Un livre qui change la vie.",
                "Très inspirant et motivant.",
                "Des idées profondes sur la programmation en Clean Code."
              ],
              
            },          
        {
            id: 31,
            title: "JAVA",
            author: "Thiery Richard",
            description: "Découvrez les bases et les aspects avancés de la programmation en JAVA dans ce livre captivant. Idéal pour les développeurs débutants comme expérimentés, ce guide fournit des exemples pratiques et des explications claires pour maîtriser ce langage puissant.",
            price: 25.0,
            category: "Programmation",
            coverImage: image19,
            BestSellers:true,
            rating: 4.0,
            reviews: [
                "Une ressource incontournable pour apprendre JAVA.",
                "Un guide clair et pratique pour les développeurs.",
                "J'ai beaucoup progressé grâce à ce livre."
            ]
        },
        {
            id: 32,
            title: "Apprendre la programmation Orientée Objet avec le langage JAVA",
            author: "Thiery Richard",
            description: "Ce livre plonge dans les principes de la programmation orientée objet en utilisant JAVA. Avec des exemples concrets et des exercices progressifs, il constitue une référence essentielle pour comprendre et appliquer les concepts fondamentaux de l’OOP.",
            price: 26.0,
            category: "Programmation",
            coverImage: image20,
            BestSellers:false,
            rating: 4.0,
            reviews: [
                "Des explications claires sur l'OOP avec JAVA.",
                "Idéal pour comprendre les bases et aller plus loin.",
                "Un outil indispensable pour tout développeur."
            ]
        },
        {
            id: 33,
            title: "PHP et Symfony",
            author: "Yves Deloison",
            description: "Explorez le développement web avec PHP et le framework Symfony dans ce livre détaillé. Apprenez à créer des applications robustes et sécurisées grâce à des exemples pratiques et des conseils d'experts.",
            price: 27.0,
            category: "Programmation",
            coverImage: image21,
            BestSellers:false,
            rating: 4.0,
            reviews: [
                "Une introduction complète à Symfony.",
                "Parfait pour les développeurs PHP cherchant à évoluer.",
                "Des concepts avancés expliqués simplement."
            ]
        },
        {
            id: 34,
            title: "SQL pour les nuls",
            author: "Jean-Pierre Lefebvre",
            description: "Un guide simple et accessible pour maîtriser SQL. Ce livre est parfait pour les débutants et couvre tout, des requêtes de base aux techniques avancées de gestion de bases de données.",
            price: 28.0,
            category: "Programmation",
            coverImage: image22,
            BestSellers:false,
            rating: 4.0,
            reviews: [
                "Un must-have pour apprendre SQL.",
                "Très pédagogique et facile à suivre.",
                "M'a aidé à structurer mes connaissances en SQL."
            ]
        },
        {
            id: 35,
            title: "Business Pour Tous en 60 jours",
            author: "Pearson",
            description: "Un guide pratique pour lancer et développer un business en deux mois. Ce livre propose des étapes claires, des conseils d'experts et des stratégies éprouvées pour réussir.",
            price: 29.0,
            category: "Affaires",
            coverImage: image23,
            BestSellers:true,
            rating: 4.0,
            reviews: [
                "Un plan d'action simple et efficace.",
                "Incontournable pour les entrepreneurs débutants.",
                "Des conseils concrets pour réussir."
            ]
        },
        {
            id: 36,
            title: "Proclamme sur ton business",
            author: "Marthe Carine",
            description: "Boostez votre entreprise avec ce livre inspirant qui allie stratégie et motivation. Découvrez comment transformer vos idées en succès et dépasser vos limites.",
            price: 30.0,
            category: "Affaires",
            coverImage: image24,
            BestSellers:true,
            rating: 4.0,
            reviews: [
                "Très motivant et plein de bonnes idées.",
                "Idéal pour développer un mindset d'entrepreneur.",
                "J'ai adoré les exemples inspirants."
            ]
        },
        {
            id: 37,
            title: "Petite habitude, grande réussite",
            author: "ONOr Karapinar",
            description: "Ce livre explore l'impact des petites habitudes sur les grandes réussites. Avec des conseils pratiques et des études de cas, il vous aide à transformer votre quotidien pour atteindre vos objectifs.",
            price: 31.0,
            category: "Affaires",
            coverImage: image25,
            BestSellers:false,
            rating: 4.0,
            reviews: [
                "Des astuces simples mais puissantes.",
                "Un changement de perspective incroyable.",
                "À lire absolument pour qui veut évoluer."
            ]
        },
        {
            id: 38,
            title: "Réussir mon premier Business Plan",
            author: "Fabrice Carlier",
            description: "Apprenez à concevoir un business plan solide et convaincant grâce à ce livre. Découvrez les étapes essentielles pour structurer vos idées, attirer des investisseurs et lancer votre entreprise.",
            price: 32.0,
            category: "Affaires",
            coverImage: image26,
            BestSellers:true,
            rating: 4.0,
            reviews: [
                "M'a énormément aidé pour mon projet.",
                "Très pratique avec des exemples concrets.",
                "Une ressource précieuse pour les entrepreneurs."
            ]
        },
        {
            id: 39,
            title:"Le guide du Ecommerce",
            author: "Alain Samevo",
            description: "Découvrez les secrets du succès dans le commerce électronique. C'  et un guide complet qui vous aidera a lancer et a developper votre entreprise en ligne. ",
            price: 33.0,
            category: "Affaires",
            coverImage: image27,
            BestSellers:true,
            rating: 4.0,
            reviews: [
                "Un guide complet et très utile.",
                "M'a donné des idées pour améliorer mon site.",
                "Un must-have pour les commerçants en ligne."
                ]
                },
         {
            id: 40,
            title:"Culture Scientifique",
            author:"Brain CLEGG",
            description: "Ce livre explore les relations entre la science et la culture. Il examine comment la science influence notre compréhension du monde et comment elle est perçue par la société.",
            price: 34.0,
            category: "Science",
            coverImage:image28,
            BestSellers:false,
            rating: 4.0,
            reviews: [
                "Un livre très intéressant et bien écrit.",
                "Un aperçu fascinant de la science contemporaine.",
                "Un ouvrage qui fait réfléchir."
                ]
                },
        {
                    id: 41,
                    title:"Le Super Livre c'est pas sorcier",
                    author:"Jean Paule",
                    description: "Ce livre est un guide complet pour les parents qui veulent aider leurs enfants à apprendre les mathématiques de manière ludique et amusante.",
                    price: 35.0,
                    category: "Science",
                    coverImage:image29,
                    BestSellers:true,
                    rating: 4.0,
                    reviews: [
                        "Un livre très utile pour les parents.",
                        "Un guide pratique et bien structuré.",
                        "Un outil précieux pour les parents qui veulent aider leurs enfants à apprendres les mathématiques."
                        ]
        },
    {
            id: 42,
            title:"Petite Histoire des Sciences",
            author:"Wiliam BYNUm",
            description: "Ce livre est un récit passionnant de l'histoire des sciences, d 'Archimède à Einstein en passant par Newton et Galilée.",
            price: 36.0,
            category: "Science",
            coverImage:image31,
            BestSellers:true,
            rating: 4.0,
            reviews: [
                "Un livre très intéressant et bien écrit.",
                "Un aperçu fascinant de l'histoire des sciences.",
                "Un ouvrage qui fait réfléchir."
                ]
    },
    {
                    id: 43,
                    title:"Moustapha",
                    author:"Moustapha Ndiaye",
                    description: "Ce livre est un récit passionnant de l'histoire de la science et de la technologie en Afrique.",
                    price: 37.0,
                    category: "roman",
                    coverImage:image32,
                    BestSellers:true,
                    rating: 4.0,
                    reviews: [
                        "Un livre très intéressant et bien écrit.",
                    ]
                    },
                    {
                        id:44,
                        title:"ma Fille",
                        author:"Moustapha Diom",
                        description: "Ce livre est un récit passionnant de l'histoire de la science et de la technologie en Afrique.", 
                        price: 38.0,
                        category: "roman",
                        coverImage:image35,
                        BestSellers:true,
                        rating: 4.0,
                        reviews: [
                            "Un livre très intéressant et bien écrit.",
                        ]
                        },  
        {
                            id:45,
                            title:"ô pays, Mon beau peuple",
                            author:"Ousmane Sembène",
                            description: "Ce livre est un récit passionnant de l'histoire de la science et de la technologie en Afrique.",
                            price: 39.0,
                            category: "roman",
                            coverImage:image36,
                            BestSellers:true,
                            rating: 4.0,
                            reviews: [
                                "Un livre très intéressant et bien écrit.",
                                ]

        },
        {
    id: 46,
    title: "Le livre de L'amour",
    author: "Gazhali",
    description: "Un ouvrage profond et poétique explorant l'amour sous toutes ses formes : spirituel, humain et divin. Gazhali invite à une réflexion sur les liens universels qui unissent les cœurs.",
    price: 10,
    category: "islam",
    coverImage: image42,
    BestSellers: true,
    rating: 4.5,
    reviews: [
        "Une lecture captivante qui inspire à mieux comprendre l'amour dans toutes ses dimensions.",
        "Un mélange parfait de spiritualité et de philosophie, magnifiquement écrit.",
    ]
},
{
    id: 47,
    title: "Les secrets de la purification",
    author: "Gazhali",
    description: "Ce livre dévoile les étapes de purification spirituelle selon une perspective islamique, avec des conseils pratiques pour atteindre une vie équilibrée et harmonieuse.",
    price: 11,
    category: "islam",
    coverImage: image38,
    BestSellers: false,
    rating: 4.2,
    reviews: [
        "Un guide essentiel pour quiconque cherche à améliorer sa relation avec soi-même et avec Dieu.",
        "Inspirant et accessible, ce livre change la manière de voir la spiritualité.",
    ]
},
{
    id: 48,
    title: "Le livre des vices de la langue",
    author: "Gazhali",
    description: "Une analyse fascinante des mots et de leur impact sur les autres et sur soi-même. Gazhali met en garde contre les dangers des paroles irréfléchies et propose des solutions pour une communication bienveillante.",
    price: 12,
    category: "islam",
    coverImage: image39,
    BestSellers: false,
    rating: 4.3,
    reviews: [
        "Un livre qui pousse à la réflexion sur l'usage quotidien de la parole.",
        "Très pertinent dans notre époque où les mots sont parfois utilisés à mauvais escient.",
    ]
},
{
    id: 49,
    title: "Le livre de la méditation",
    author: "Gazhali",
    description: "Un guide intemporel sur la méditation et la contemplation, aidant à se recentrer et à atteindre un état de paix intérieure.",
    price: 13,
    category: "islam",
    coverImage: image40,
    BestSellers: false,
    rating: 4.4,
    reviews: [
        "Un chef-d'œuvre pour les amateurs de spiritualité et de réflexion.",
        "Un livre qui enseigne l'art de ralentir et d'observer le monde avec un regard neuf.",
    ]
},
{
    id: 50,
    title: "Le livre du voyage",
    author: "Gazhali",
    description: "Une exploration spirituelle et physique du voyage, vu comme un moyen de croissance personnelle et de connexion à l'univers.",
    price: 14,
    category: "islam",
    coverImage: image41,
    BestSellers: false,
    rating: 4.6,
    reviews: [
        "Une invitation au voyage intérieur comme extérieur, riche en enseignements.",
        "Inspirant, ce livre change notre manière de voir le monde et nous-mêmes.",
    ]
},

];      
        
          
                         
                                                                                    

                                                                                                                                                                                                                                                                                                                                                                                            
  
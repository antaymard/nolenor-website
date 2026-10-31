import type { Lang } from "@/i18n";

export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqEntries: Record<Lang, FaqEntry[]> = {
  en: [
    {
      question: "Is Nolënor another AI chat tool?",
      answer:
        "No. Nolënor is a canvas you think and work on, with an agent built in. Instead of describing everything in a chat, you lay notes, links, images, PDFs and tables down in one space, show Nolë the ones that matter, and watch what it does with them.",
    },
    {
      question: "What is Nolënor used for?",
      answer:
        "Work that needs thinking before it needs output. A consultant maps a new market for a client. A medical science liaison turns a clinical study into a presentation. A toxicologist checks a packaging against the regulations, substance by substance. A product designer goes from the competition to a working prototype. You do the work; Nolë fills the gaps you point it to.",
    },
    {
      question: "How is Nolënor different from note-taking apps?",
      answer:
        "Most note apps ask you to decide where something goes before you've understood it. On a canvas you lay it down first and make sense of it as you go: everything can be linked, searched and reworked, by you or by Nolë, without picking a folder first.",
    },
    {
      question: "Does the AI see my entire canvas?",
      answer:
        "No. You show it where to look: select or @mention the nodes and sources Nolë should use, and follow each step it takes as it works. That's what keeps its work easy to check and to correct.",
    },
    {
      question: "What can I add to my Nolënor workspace?",
      answer:
        "Notes, links, images, PDFs, audio, video, tables, tasks and interactive apps. Each one becomes a node you can move, link, search and reuse as the project grows.",
    },
    {
      question: "Can I use Nolënor without AI?",
      answer:
        "Yes, and that matters to us. Nolënor is a full canvas on its own: capture, lay out, link and search by hand. Switch the AI off and your work is still there, and so is your understanding of it.",
    },
    {
      question: "Can Nolënor help me work with PDFs and other documents?",
      answer:
        "Yes. Bring documents onto the canvas, link them to your ideas and ask Nolë focused questions about the ones you select. Useful for research, analysis, synthesis and making decisions.",
    },
    {
      question: "Is Nolënor free?",
      answer:
        "Nolënor is currently in open beta and free to use while we build it with early users. AI usage is included within generous fair-use limits. Pricing may evolve as the product develops.",
    },
    {
      question: "Can I export my data from Nolënor?",
      answer:
        "Yes. You can export your work in open formats (Markdown, JSON and CSV) whenever you want. Your work stays yours, not locked inside the platform.",
    },
    {
      question: "Who is Nolënor for?",
      answer:
        "People with a craft who want AI to amplify it rather than take it over: developers, designers, researchers, consultants, strategists, founders. If what you want is an autopilot, it probably isn't for you.",
    },
  ],
  fr: [
    {
      question: "Nolënor est-il un énième outil de chat IA ?",
      answer:
        "Non. Nolënor est un canevas sur lequel vous réfléchissez et travaillez, avec un agent intégré. Au lieu de tout décrire dans une conversation, vous posez notes, liens, images, PDF et tableaux dans un même espace, vous montrez à Nolë ceux qui comptent, et vous regardez ce qu’il en fait.",
    },
    {
      question: "À quoi sert Nolënor ?",
      answer:
        "Au travail qui demande de la réflexion avant de demander un livrable. Un consultant cartographie un nouveau marché pour un client. Une MSL transforme une étude clinique en présentation. Un toxicologue vérifie la conformité d’un emballage à la réglementation, substance par substance. Un product designer passe de l’analyse de la concurrence à un prototype qui fonctionne. Vous faites le travail ; Nolë comble les manques que vous lui désignez.",
    },
    {
      question: "En quoi Nolënor diffère-t-il des applications de prise de notes ?",
      answer:
        "La plupart des applications de notes vous demandent de décider où ranger une chose avant même de l’avoir comprise. Sur un canevas, vous la posez d’abord et lui donnez du sens au fil du travail : tout peut être relié, retrouvé et retravaillé, par vous ou par Nolë, sans avoir à choisir un dossier au préalable.",
    },
    {
      question: "L’IA voit-elle tout mon canevas ?",
      answer:
        "Non. C’est vous qui lui montrez où regarder : sélectionnez ou @mentionnez les nœuds et les sources que Nolë doit utiliser, et suivez chacune de ses étapes pendant qu’il travaille. C’est ce qui rend son travail facile à vérifier et à corriger.",
    },
    {
      question: "Que puis-je ajouter à mon espace de travail Nolënor ?",
      answer:
        "Des notes, des liens, des images, des PDF, de l’audio, de la vidéo, des tableaux, des tâches et des applications interactives. Chaque élément devient un nœud que vous pouvez déplacer, relier, rechercher et réutiliser à mesure que le projet grandit.",
    },
    {
      question: "Puis-je utiliser Nolënor sans IA ?",
      answer:
        "Oui, et nous y tenons. Nolënor est un canevas complet à lui seul : capturez, disposez, reliez et cherchez à la main. Coupez l’IA : votre travail est toujours là, et votre compréhension de ce travail aussi.",
    },
    {
      question: "Nolënor peut-il m’aider à travailler avec des PDF et d’autres documents ?",
      answer:
        "Oui. Apportez vos documents sur le canevas, reliez-les à vos idées et posez à Nolë des questions précises sur ceux que vous sélectionnez. Utile pour la recherche, l’analyse, la synthèse et la prise de décision.",
    },
    {
      question: "Nolënor est-il gratuit ?",
      answer:
        "Nolënor est actuellement en bêta ouverte, et gratuit pendant que nous le construisons avec ses premiers utilisateurs. L’usage de l’IA est inclus, dans des limites d’usage raisonnable généreuses. Les tarifs pourront évoluer avec le produit.",
    },
    {
      question: "Puis-je exporter mes données depuis Nolënor ?",
      answer:
        "Oui. Vous pouvez exporter votre travail dans des formats ouverts (Markdown, JSON et CSV) quand vous le voulez. Votre travail reste le vôtre : il n’est pas enfermé dans la plateforme.",
    },
    {
      question: "À qui s’adresse Nolënor ?",
      answer:
        "Aux gens de métier qui veulent que l’IA amplifie leur savoir-faire plutôt qu’elle ne s’en empare : développeurs, designers, chercheurs, consultants, stratèges, fondateurs. Si vous cherchez un pilote automatique, ce n’est sans doute pas pour vous.",
    },
  ],
};

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
      question: "Nolënor, c’est encore un chat avec une IA ?",
      answer:
        "Non. C’est un canevas pour réfléchir et travailler, avec un agent intégré. Plutôt que de tout expliquer dans une conversation, vous posez notes, liens, images, PDF et tableaux au même endroit, vous montrez à Nolë ceux qui comptent, et vous le regardez travailler dessus.",
    },
    {
      question: "À quoi sert Nolënor ?",
      answer:
        "Au travail où il faut réfléchir avant de produire. Un consultant cartographie un nouveau marché pour un client. Une MSL tire une présentation d’une étude clinique. Un toxicologue vérifie qu’un emballage respecte la réglementation, substance par substance. Un product designer part de la concurrence et arrive à un prototype qui marche. Le travail, c’est vous qui le faites ; Nolë comble les trous que vous lui montrez.",
    },
    {
      question: "Quelle différence avec une appli de prise de notes ?",
      answer:
        "La plupart des applis de notes vous obligent à décider où ranger une chose avant même de l’avoir comprise. Sur un canevas, vous la posez d’abord et vous y voyez clair en avançant. Tout se relie, se retrouve et se retravaille, par vous ou par Nolë, sans passer par la case dossier.",
    },
    {
      question: "L’IA voit-elle tout mon canevas ?",
      answer:
        "Non. C’est vous qui lui dites où regarder : sélectionnez ou @mentionnez les nœuds et les sources que Nolë doit utiliser, puis suivez chacune de ses étapes pendant qu’il travaille. C’est pour ça que son travail reste facile à vérifier et à corriger.",
    },
    {
      question: "Qu’est-ce que je peux mettre dans Nolënor ?",
      answer:
        "Des notes, des liens, des images, des PDF, de l’audio, de la vidéo, des tableaux, des tâches et des applications interactives. Chaque élément devient un nœud, que vous déplacez, reliez, cherchez et réutilisez à mesure que le projet grandit.",
    },
    {
      question: "Peut-on se servir de Nolënor sans IA ?",
      answer:
        "Oui, et on y tient. Nolënor est un canevas complet à lui seul : vous pouvez tout noter, disposer, relier et chercher à la main. Coupez l’IA, votre travail est toujours là, et vous savez toujours ce qu’il contient.",
    },
    {
      question: "Est-ce que Nolënor m’aide à travailler sur des PDF et d’autres documents ?",
      answer:
        "Oui. Déposez vos documents sur le canevas, reliez-les à vos idées et posez à Nolë des questions précises sur ceux que vous sélectionnez. Pratique pour la recherche, l’analyse, la synthèse ou avant une décision.",
    },
    {
      question: "Nolënor est gratuit ?",
      answer:
        "Oui, pendant la bêta. Nolënor est en bêta ouverte, et gratuit le temps qu’on le construise avec ses premiers utilisateurs. L’IA est comprise, dans la limite d’un usage raisonnable, et cette limite est large. Les tarifs pourront évoluer avec le produit.",
    },
    {
      question: "Je peux exporter mes données ?",
      answer:
        "Oui, quand vous voulez, dans des formats ouverts : Markdown, JSON et CSV. Votre travail vous appartient, il ne reste pas prisonnier de la plateforme.",
    },
    {
      question: "À qui s’adresse Nolënor ?",
      answer:
        "Aux gens de métier qui veulent que l’IA amplifie leur savoir-faire, pas qu’elle le leur prenne : développeurs, designers, chercheurs, consultants, stratèges, fondateurs. Si vous cherchez un pilote automatique, ce n’est sans doute pas le bon outil.",
    },
  ],
};

import Script from "next/script";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://targetkurs.vercel.app/#organization",
        name: "Target Mentorship",
        url: "https://targetkurs.vercel.app",
        logo: "https://targetkurs.vercel.app/apple-touch-icon.png",
        founder: {
          "@type": "Person",
          name: "Тимур Султанов",
        },
        sameAs: [],
      },
      {
        "@type": "Course",
        "@id": "https://targetkurs.vercel.app/course#course",
        name: "Интенсив по таргетированной рекламе",
        description:
          "Пошаговая система выхода на 500 000–1 000 000₸ в месяц через таргет. Готовая воронка, AI-инструменты, личное наставничество.",
        provider: {
          "@id": "https://targetkurs.vercel.app/#organization",
        },
        url: "https://targetkurs.vercel.app/course",
        inLanguage: "ru",
        educationalLevel: "Beginner",
        teaches: [
          "Настройка Facebook Ads / Meta Ads",
          "Привлечение клиентов на высокий чек",
          "Работа с нейросетями и AI-инструментами",
          "Масштабирование агентства",
        ],
        offers: {
          "@type": "Offer",
          price: "1990",
          priceCurrency: "KZT",
          availability: "https://schema.org/InStock",
          url: "https://targetkurs.vercel.app/course",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Сколько стоит интенсив?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "1 990₸ — символическая цена-фильтр. Основная ценность (наставничество и попадание в команду) доступна тем, кто пройдёт интенсив.",
            },
          },
          {
            "@type": "Question",
            name: "Подходит ли новичкам без опыта в таргете?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Да. Система построена так, чтобы выйти на первые 500 000₸ за 60 дней с нуля — без опыта в таргете.",
            },
          },
          {
            "@type": "Question",
            name: "Есть ли гарантия возврата?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Да, 100% возврат суммы в течение 14 дней, если формат вам не подойдёт. Без вопросов и хитрых условий.",
            },
          },
          {
            "@type": "Question",
            name: "Сколько времени нужно уделять?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Практика начинается с первых дней. Достаточно 1–2 часов в день на проработку уроков и внедрение системы у первых клиентов.",
            },
          },
          {
            "@type": "Question",
            name: "Как записаться?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Нажмите «Записаться за 1 990₸» на странице курса — откроется WhatsApp, где менеджер свяжется с вами и оформит доступ.",
            },
          },
        ],
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

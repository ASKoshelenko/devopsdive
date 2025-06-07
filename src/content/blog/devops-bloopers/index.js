export const devopsBloopers = {
  id: 'devops-bloopers',
  en: {
    title: "KUBERNETES KERFUFFLES & CI/CD COMEDY — DEVOPS BLOOPERS I'LL ADMIT IN PUBLIC",
    date: "2024-06-10",
    readTime: "6 min",
    tags: ["DevOps", "Bloopers", "CI/CD", "Kubernetes"],
    preview: "Because perfect pipelines only exist in conference slides. Real DevOps fails, lessons, and a bit of humor.",
    content: `# KUBERNETES KERFUFFLES & CI/CD COMEDY — DEVOPS BLOOPERS I'LL ADMIT IN PUBLIC

Because perfect pipelines only exist in conference slides.

⸻

**Bloopers reel (with lessons):**

| What broke | Why it hurt | Fix & takeaway |
|------------|-------------|----------------|
| Deployed a Helm chart with \`image: latest\` 🤦‍♂️ | Canary pulled a new tag mid-demo | Pin versions. Always. |
| Added "quick debug" \`sleep 300\` in entrypoint.sh | Forgot to remove → 5-min cold start | PR reviews catch everything… except your midnight hacks. |
| \`rm -rf\` inside CI using env var \`WORK_DIR\`… misspelled | Wiped artifacts folder | Add \`set -euo pipefail\` gates. Bash is a frenemy. |
| Wrote a KQL query returning 1M rows to Slack | Slack rate-limited the whole team | Aggregate before you automate. |

I own these scars. They pay dividends in prevented outages.

**Moral of the sprint:**
- Done beats pristine. Iterate → automate → refactor.
- Post-mortems > posturing. Share the fail; save a peer.
- Humour heals tech debt. If we can't laugh, we can't learn.

⸻

Your turn: drop your funniest infra facepalm below. Let's crowd-source wisdom (and memes). 🛠️😂
`
  },
  ru: {
    title: "KUBERNETES-ЛЯПЫ И CI/CD-КОМЕДИЯ — МОИ DEVOPS-ФЕЙЛЫ ПУБЛИЧНО",
    date: "2024-06-10",
    readTime: "6 мин",
    tags: ["DevOps", "Фейлы", "CI/CD", "Kubernetes"],
    preview: "Идеальные пайплайны бывают только на слайдах. Реальные DevOps-факапы, уроки и немного самоиронии.",
    content: `# KUBERNETES-ЛЯПЫ И CI/CD-КОМЕДИЯ — МОИ DEVOPS-ФЕЙЛЫ ПУБЛИЧНО

Идеальные пайплайны бывают только на слайдах.

⸻

**Фейлы (и уроки):**

| Что сломалось | Почему больно | Фикс и вывод |
|---------------|--------------|--------------|
| Задеплоил Helm chart с \`image: latest\` 🤦‍♂️ | Canary подтянул новый тег прямо на демо | Фиксируй версии. Всегда. |
| Добавил "быстрый debug" \`sleep 300\` в entrypoint.sh | Забыл убрать → 5-минутный cold start | PR-ревью ловит всё… кроме ночных хака. |
| \`rm -rf\` в CI с переменной \`WORK_DIR\`… опечатка | Снес артефакты | Добавь \`set -euo pipefail\`. Bash — друг с подвохом. |
| KQL-запрос на 1М строк в Slack | Slack зарейт-лимитил всю команду | Агрегируй, прежде чем автоматизировать. |

Эти шрамы — мои. Они экономят простои в будущем.

**Мораль спринта:**
- Сделано лучше, чем идеально. Итерация → автоматизация → рефакторинг.
- Post-mortem > понты. Делись фейлом — спасёшь коллегу.
- Юмор лечит техдолг. Если не смеёмся — не учимся.

⸻

Твой ход: напиши свой самый смешной DevOps-фейл ниже. Давайте соберём народную мудрость (и мемы). 🛠️😂
`
  },
  ua: {
    title: "KUBERNETES-ФЕЙЛИ ТА CI/CD-КОМЕДІЯ — МОЇ DEVOPS-ЛЯПИ ПУБЛІЧНО",
    date: "2024-06-10",
    readTime: "6 хв",
    tags: ["DevOps", "Фейли", "CI/CD", "Kubernetes"],
    preview: "Ідеальні пайплайни бувають тільки на слайдах. Реальні DevOps-фейли, уроки і трохи самоіронії.",
    content: `# KUBERNETES-ФЕЙЛИ ТА CI/CD-КОМЕДІЯ — МОЇ DEVOPS-ЛЯПИ ПУБЛІЧНО

Ідеальні пайплайни бувають тільки на слайдах.

⸻

**Фейли (і уроки):**

| Що зламалось | Чому боляче | Фікс і висновок |
|--------------|------------|-----------------|
| Задеплоїв Helm chart з \`image: latest\` 🤦‍♂️ | Canary підтягнув новий тег прямо на демо | Фіксуй версії. Завжди. |
| Додав "швидкий debug" \`sleep 300\` в entrypoint.sh | Забув прибрати → 5-хвилинний cold start | PR-рев'ю ловить все… крім нічних хака. |
| \`rm -rf\` у CI з змінною \`WORK_DIR\`… помилка | Видалив артефакти | Додай \`set -euo pipefail\`. Bash — друг з підступом. |
| KQL-запит на 1М рядків у Slack | Slack зарейт-лімітив всю команду | Агрегуй, перш ніж автоматизувати. |

Ці шрами — мої. Вони економлять простій у майбутньому.

**Мораль спринту:**
- Зроблено краще, ніж ідеально. Ітерація → автоматизація → рефакторинг.
- Post-mortem > понти. Ділись фейлом — врятуєш колегу.
- Гумор лікує техборг. Якщо не сміємось — не вчимося.

⸻

Твій хід: напиши свій найсмішніший DevOps-фейл нижче. Давайте зберемо народну мудрість (і меми). 🛠️😂
`
  }
}; 
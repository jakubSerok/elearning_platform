import { db } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import { ExerciseTable } from "@/config/schema";

const DATA = [
  {
    courseId: 2,
    exerciseId: "explore-the-web-skeleton",
    exerciseName: "Explore the Web Skeleton",
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Welcome, brave explorer! Your journey begins by discovering the <strong>web skeleton</strong>. Every web page is built on the foundation of HTML.</p><p style='margin-bottom:8px;'>The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser what type of document it is and prepares the page for modern rendering.</p><p style='margin-bottom:8px;'>The outer wrapper <code>&lt;html&gt;</code> contains everything on the page — think of it as the walls of your fortress.</p><p style='margin-bottom:8px;'>Inside the fortress, the <code>&lt;head&gt;</code> stores your tools: the <code>&lt;title&gt;</code>, meta tags, and other hidden helpers.</p><p style='margin-bottom:8px;'>The <code>&lt;body&gt;</code> is the open field where your story unfolds — headings, paragraphs, images, and links all appear here.</p><p style='margin-bottom:8px;'>Headings act like banners guiding visitors; paragraphs are your story logs; lists are treasure maps organizing loot.</p><p style='margin-bottom:8px;'>If the skeleton is wrong, your page may look broken or confusing. Correct structure means a reliable page across browsers and devices.</p><p style='margin-bottom:8px;'>This exercise trains you to recognize the essential tags that every HTML page needs. It is the first step to mastering web crafting.</p><p style='margin-bottom:8px;'>Observe, build, and defend your web skeleton — then move on to more advanced quests with confidence.</p><p style='margin-bottom:8px;'>Ready your quill: identify the DOCTYPE, the <code>&lt;html&gt;</code> wrapper, a proper <code>&lt;head&gt;</code> and the <code>&lt;body&gt;</code> to claim your victory.</p><p style='margin-bottom:8px;'>Completing this will unlock basic HTML understanding and set you up for the rest of the course.</p><p style='margin-bottom:8px;'>Good luck — the web world awaits!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Create a complete HTML skeleton including <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html lang=\"en\"&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>. Inside <code>&lt;head&gt;</code> add a <code>&lt;title&gt;</code> with the text <strong>Web Skeleton Adventure</strong>. Leave the body empty for now.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Start with <code>&lt;!DOCTYPE html&gt;</code>. Then create <code>&lt;html lang=\"en\"&gt;</code>. Inside head add <code>&lt;title&gt;Web Skeleton Adventure&lt;/title&gt;</code>. Finally add an empty <code>&lt;body&gt;</code>.</p></body>",
      starterCode: {
        "/index.html":
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: "(?i)<title>\\s*Web Skeleton Adventure\\s*</title>",
      output: "<title>Web Skeleton Adventure</title>",
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: "build-your-base-camp",
    exerciseName: "Build Your Base Camp",
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Every adventurer needs a base camp — a safe place to plan and rest. In HTML, your base camp is built with headings, paragraphs, and sections.</p><p style='margin-bottom:8px;'>A main heading (<code>&lt;h1&gt;</code>) acts like a flag planted at the camp's center, marking its purpose.</p><p style='margin-bottom:8px;'>Paragraphs (<code>&lt;p&gt;</code>) are the camp logs where you record instructions, stories, and NPC dialogues.</p><p style='margin-bottom:8px;'>Sections (<code>&lt;section&gt;</code>) divide your camp into zones—training grounds, supply tents, and the map room.</p><p style='margin-bottom:8px;'>Using the correct tags keeps your camp organized, accessible, and friendly to both players and browsers.</p><p style='margin-bottom:8px;'>Headings provide hierarchy; paragraphs provide content; semantic tags give meaning to your base layouts.</p><p style='margin-bottom:8px;'>Master the base camp structure and future quests will be easier to implement and navigate.</p><p style='margin-bottom:8px;'>This exercise focuses on placing a strong heading and a descriptive paragraph in the body.</p><p style='margin-bottom:8px;'>Think of HTML elements as camp equipment—each has a specific role and must be used correctly.</p><p style='margin-bottom:8px;'>When your base camp is solid, you can explore the rest of the web world without worry.</p><p style='margin-bottom:8px;'>Complete this and your in-game reputation will rise among fellow learners.</p><p style='margin-bottom:8px;'>Set up your flag and write your first log to start the adventure!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inside the <code>&lt;body&gt;</code>, add a heading <code>&lt;h1&gt;</code> with the text <strong>Welcome to Base Camp</strong> and a paragraph <code>&lt;p&gt;</code> with the text <strong>Prepare yourself for the HTML adventure!</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>&lt;h1&gt;Welcome to Base Camp&lt;/h1&gt;</code> and <code>&lt;p&gt;Prepare yourself for the HTML adventure!&lt;/p&gt;</code> inside the body.</p></body>",
      starterCode: {
        "/index.html":
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Base Camp</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        "<h1>\\s*Welcome to Base Camp\\s*</h1>[\\s\\S]*<p>\\s*Prepare yourself for the HTML adventure!\\s*</p>",
      output:
        "<h1>Welcome to Base Camp</h1><p>Prepare yourself for the HTML adventure!</p>",
      hintXp: 35,
    },
  },
  {
    courseId: 2,
    exerciseId: "name-your-world",
    exerciseName: "Name Your World",
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Every world needs a name — a clear identity so explorers can find and recognize it. In HTML, the world is named with the <code>&lt;title&gt;</code> tag inside the <code>&lt;head&gt;</code>.</p><p style='margin-bottom:8px;'>The title appears on the browser tab and in search results, serving as your world's calling card.</p><p style='margin-bottom:8px;'>A concise and descriptive title helps visitors quickly understand what your page offers.</p><p style='margin-bottom:8px;'>Naming your world well increases discoverability and gives your site a professional feel.</p><p style='margin-bottom:8px;'>This exercise trains you to place the title correctly and choose a clear name for your HTML world.</p><p style='margin-bottom:8px;'>Think of the title as the banner that appears on every explorer's map — make it meaningful and memorable.</p><p style='margin-bottom:8px;'>Even small pages benefit from a thoughtful title — it is an important habit for all web builders.</p><p style='margin-bottom:8px;'>Once you master titles, your pages will start showing up properly in tabs and bookmarks.</p><p style='margin-bottom:8px;'>This task is simple but crucial — do it correctly to move forward in the questline.</p><p style='margin-bottom:8px;'>Add your world name inside the head and prepare for the next chapter of adventures.</p><p style='margin-bottom:8px;'>Your title completes the identity of the HTML skeleton you built earlier.</p><p style='margin-bottom:8px;'>Name well — your kingdom's reputation depends on it!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Set the HTML page <code>&lt;title&gt;</code> to <strong>My Adventure World</strong> inside the <code>&lt;head&gt;</code>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Open the <code>&lt;head&gt;</code> and add <code>&lt;title&gt;My Adventure World&lt;/title&gt;</code>. The title must be inside head, not body.</p></body>",
      starterCode: {
        "/index.html":
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title></title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex: "(?i)<title>\\s*My Adventure World\\s*</title>",
      output: "<title>My Adventure World</title>",
      hintXp: 30,
    },
  },
  {
    courseId: 2,
    exerciseId: "break-and-repair",
    exerciseName: "Break & Repair",
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Even the best fortresses can develop cracks. In HTML, broken or unclosed tags are the cracks that cause rendering issues.</p><p style='margin-bottom:8px;'>Your role is the repair hero: identify missing closing tags, mismatched nesting, and misplaced elements.</p><p style='margin-bottom:8px;'>Every opening tag (<code>&lt;tag&gt;</code>) should have a matching closing tag (<code>&lt;/tag&gt;</code>) unless it is self-closing.</p><p style='margin-bottom:8px;'>Improper nesting (for example placing a block-level tag inside an inline tag) can also break layouts and semantics.</p><p style='margin-bottom:8px;'>This exercise gives you a broken snippet to inspect and fix — a practical detective mission.</p><p style='margin-bottom:8px;'>Fixing HTML strengthens the page structure and makes future styling and interactivity predictable.</p><p style='margin-bottom:8px;'>Pay attention to headings, paragraphs, and the order of closing tags when repairing code.</p><p style='margin-bottom:8px;'>Once repaired, the page should display the correct heading and paragraph texts as intended.</p><p style='margin-bottom:8px;'>Good repair work increases your reliability as a web craftsman and prepares you for more complex challenges.</p><p style='margin-bottom:8px;'>This mission hones attention to detail — a vital skill for all web developers.</p><p style='margin-bottom:8px;'>Patch the cracks and your fortress will stand strong again.</p><p style='margin-bottom:8px;'>Begin the repair now and claim the title of Master Fixer.</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inspect and fix the broken HTML so all tags are properly opened and closed. After repair, the body should contain a heading <code>&lt;h1&gt;</code> with <strong>Fortress Repaired</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>Your castle is strong again!</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Look for missing <code>&lt;/title&gt;</code>, missing <code>&lt;/h1&gt;</code> or <code>&lt;/p&gt;</code>. Ensure tags are nested correctly: <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code> must be complete.</p></body>",
      starterCode: {
        "/index.html":
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Broken Fortress</title>\n</head>\n<body>\n  <!-- This file has intentional errors that you must fix -->\n  <h1>Fortress Repaired\n  <p>Your castle is strong again!\n</body>\n</html>',
      },
      regex:
        "<h1>\\s*Fortress Repaired\\s*</h1>[\\s\\S]*<p>\\s*Your castle is strong again!\\s*</p>",
      output: "<h1>Fortress Repaired</h1><p>Your castle is strong again!</p>",
      hintXp: 40,
    },
  },
  {
    courseId: 2,
    exerciseId: "html-detective",
    exerciseName: "HTML Detective",
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Don your detective hat — it's time to hunt down HTML mistakes. A skilled detective finds missing tags, typos, and wrong nesting.</p><p style='margin-bottom:8px;'>Start by scanning for tags that never close or are mistyped (for example <code>&lt;heder&gt;</code> instead of <code>&lt;header&gt;</code>).</p><p style='margin-bottom:8px;'>Check that textual content sits inside the correct container: headings in <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, paragraphs in <code>&lt;p&gt;</code>.</p><p style='margin-bottom:8px;'>Missing quotes on attributes or stray characters can also break parsers — be vigilant.</p><p style='margin-bottom:8px;'>This exercise gives a nearly-correct file with subtle issues; your job is to correct them so the expected texts appear.</p><p style='margin-bottom:8px;'>Keeping a checklist helps: doctype, html lang, head with title, body with content, and matching closing tags.</p><p style='margin-bottom:8px;'>A methodical approach will help you become faster at spotting problems in real-world codebases.</p><p style='margin-bottom:8px;'>When all errors are found and fixed, the page should show the heading and paragraph exactly as specified.</p><p style='margin-bottom:8px;'>This detective training is essential — it saves time and prevents frustrating bugs later.</p><p style='margin-bottom:8px;'>Inspect carefully, correct mistakes, and log your findings to level up your debugging skills.</p><p style='margin-bottom:8px;'>Complete this case and wear the badge of HTML Detective with pride.</p><p style='margin-bottom:8px;'>Begin the investigation now!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inspect the provided HTML and fix any missing or misaligned tags. After fixing, the body must contain a heading <code>&lt;h1&gt;</code> with <strong>Detective Mode</strong> and a paragraph <code>&lt;p&gt;</code> with <strong>All HTML errors are found!</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Search for unclosed tags like <code>&lt;h1&gt;</code> without <code>&lt;/h1&gt;</code>, or a title missing <code>&lt;/title&gt;</code>. Fix typos and ensure proper nesting.</p></body>",
      starterCode: {
        "/index.html":
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Detective Task</title>\n</head>\n<body>\n  <!-- Fix the issues in this file -->\n  <h1>Detective Mode\n  <p>All HTML errors are found!\n</body>\n</html>',
      },
      regex:
        "<h1>\\s*Detective Mode\\s*</h1>[\\s\\S]*<p>\\s*All HTML errors are found!\\s*</p>",
      output: "<h1>Detective Mode</h1><p>All HTML errors are found!</p>",
      hintXp: 45,
    },
  },
  {
    courseId: 2,
    exerciseId: "element-collector",
    exerciseName: "Element Collector",
    chapterId: 1,
    exercisesContent: {
      content:
        "<body style='font-family:Arial,sans-serif;line-height:1.6;background-color:#0f0f0f;padding:20px;'><p style='margin-bottom:8px;'>Become the Element Collector — gather headings, paragraphs, and lists to build a rich page. Each element is an artifact that adds meaning and structure.</p><p style='margin-bottom:8px;'>Headings (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>) give hierarchy; paragraphs (<code>&lt;p&gt;</code>) provide content; lists (<code>&lt;ul&gt;</code> / <code>&lt;ol&gt;</code>) organize items.</p><p style='margin-bottom:8px;'>Links (<code>&lt;a&gt;</code>) guide explorers to new realms, and images (<code>&lt;img&gt;</code>) paint scenes of your world.</p><p style='margin-bottom:8px;'>Using these elements correctly creates pages that are scannable, accessible, and enjoyable to read.</p><p style='margin-bottom:8px;'>This exercise will ask you to collect a few basic elements and place them in the body.</p><p style='margin-bottom:8px;'>Think of each <code>&lt;li&gt;</code> as a treasure chest — list them clearly for future retrieval.</p><p style='margin-bottom:8px;'>Collecting and arranging elements teaches you how to present information cleanly and logically.</p><p style='margin-bottom:8px;'>A well-structured page is easier to style later and better for accessibility tools and search engines.</p><p style='margin-bottom:8px;'>Practice makes perfect: the more elements you use, the more confident you become.</p><p style='margin-bottom:8px;'>This quest readies you for complex pages by mastering small, reusable parts.</p><p style='margin-bottom:8px;'>Collect the required elements and your inventory will be complete.</p><p style='margin-bottom:8px;'>Start collecting now — three artifacts await!</p></body>",
      task: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Inside the <code>&lt;body&gt;</code>, add a heading <code>&lt;h1&gt;</code> with <strong>Element Collection</strong>, a paragraph <code>&lt;p&gt;</code> with <strong>Gather all HTML treasures!</strong>, and an unordered list <code>&lt;ul&gt;</code> with three list items: <strong>Headings</strong>, <strong>Paragraphs</strong>, and <strong>Links</strong>.</p></body>",
      hint: "<body style='font-family:Arial,sans-serif;padding:10px;'><p>Use <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and a <code>&lt;ul&gt;</code> containing three <code>&lt;li&gt;</code> items. Example: <code>&lt;li&gt;Headings&lt;/li&gt;</code>.</p></body>",
      starterCode: {
        "/index.html":
          '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Element Collector</title>\n</head>\n<body>\n\n</body>\n</html>',
      },
      regex:
        "<h1>\\s*Element Collection\\s*</h1>[\\s\\S]*<p>\\s*Gather all HTML treasures!\\s*</p>[\\s\\S]*<li>\\s*Headings\\s*</li>[\\s\\S]*<li>\\s*Paragraphs\\s*</li>[\\s\\S]*<li>\\s*Links\\s*</li>",
      output:
        "<h1>Element Collection</h1><p>Gather all HTML treasures!</p><ul><li>Headings</li><li>Paragraphs</li><li>Links</li></ul>",
      hintXp: 35,
    },
  },
];

export async function GET(req: NextRequest) {
  DATA.forEach(async (item) => {
    await db.insert(ExerciseTable).values({
      courseId: item?.courseId,
      chapterId: item?.chapterId,
      exerciseId: item?.exerciseId,
      exerciseName: item?.exerciseName,
      exercisesContent: item?.exercisesContent,
    });
  });
  return NextResponse.json("Success");
}

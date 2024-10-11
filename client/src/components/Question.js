import React from "react";
import Voter from "./Voter"; // Import the new Voter component
import Answer from "./Answer";
import { formatDistanceToNow, parseISO } from "date-fns";
import PostFooter from "./PostFooter";
import RichTextarea from "./RichTextarea";
import InfoBar from "./InfoBar";
import AskQuestionButton from "./AskQuestionButton";

const formatViews = (views) => {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }
  return views;
};

// Function to remove "about" from the relative date
const cleanRelativeDate = (relativeDate) => {
  return relativeDate.replace(/^about /, "");
};

const Question = () => {
  const question = {
    title: "How do I center a div in CSS?",
    content:
      "I'm trying to center a div both vertically and horizontally. What are the best practices for doing this in CSS? Here are some things I've tried...",
    votes: 25,
    views: 1025,
    datePosted: "2021-09-15T14:45:00",
    dateModified: "2023-10-31T12:10:00",
    author: "CSSNewbie",
    tags: ["css", "html", "center"],
    comments: [
      {
        id: 1,
        content: "Have you tried using flexbox for centering?",
        author: "JohnDoe",
        datePosted: new Date("2023-10-01T10:15:00"),
      },
      {
        id: 2,
        content: "You can also use CSS Grid for better flexibility.",
        author: "JaneSmith",
        datePosted: new Date("2023-10-03T16:25:00"),
      },
    ],
    answers: [
      {
        id: 1,
        content: "You can use `display: flex` and `justify-content: center;` combined with `align-items: center;` to center a div.",
        votes: 1583,
        isAccepted: true,
        author: "FlexMaster",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [
          {
            id: 1,
            content: "Flexbox is great for responsive layouts too!",
            author: "MikeD",
            datePosted: new Date("2023-10-05T09:30:00"),
          },
        ],
      },
      {
        id: 2,
        content: "Another option is to use `margin: auto;` on the div and set a width.",
        votes: 3462,
        isAccepted: false,
        author: "AutoMarginPro",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [],
      },
      {
        id: 3,
        content: "You can use `position: absolute;` combined with `top: 50%; left: 50%;` and `transform: translate(-50%, -50%);` for centering.",
        votes: 712,
        isAccepted: false,
        author: "PositionMaster",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [
          {
            id: 1,
            content: "This method requires extra care with responsive design.",
            author: "ResponsiveGuru",
            datePosted: new Date("2023-10-06T14:45:00"),
          },
          {
            id: 2,
            content: "Be careful with older browsers when using this technique.",
            author: "BrowserNinja",
            datePosted: new Date("2023-10-07T18:10:00"),
          },
        ],
      },
      {
        id: 4,
        content: "Using CSS Grid is another modern approach. Set the container to `display: grid; place-items: center;`.",
        votes: 1212,
        isAccepted: false,
        author: "GridMaster",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [
          {
            id: 1,
            content: "CSS Grid provides better control over positioning.",
            author: "GridMaster",
            datePosted: new Date("2023-10-08T11:20:00"),
          },
        ],
      },
      {
        id: 5,
        content: "For older browsers, try setting the parent to `text-align: center;` and the child to `display: inline-block;`.",
        votes: 431,
        isAccepted: false,
        author: "OldBrowserHater",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [],
      },
      {
        id: 6,
        content: "You can also use Flexbox: `display: flex; justify-content: center; align-items: center;` is an easy way.",
        votes: 983,
        isAccepted: false,
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [],
      },
      {
        id: 7,
        content: "If the div has a fixed width, use `margin: 0 auto;` along with `position: relative;` for horizontal centering.",
        votes: 545,
        isAccepted: false,
        author: "FixedWidthPro",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [
          {
            id: 1,
            content: "This method can be useful when dealing with fixed-width containers.",
            author: "FixedWidthFan",
            datePosted: new Date("2023-10-02T13:35:00"),
          },
        ],
      },
      {
        id: 8,
        content: "Use `min-height: 100vh; display: flex; justify-content: center; align-items: center;` for full-page centering.",
        votes: 1101,
        isAccepted: false,
        author: "FullPageCentering",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [],
      },
      {
        id: 9,
        content: "To center inline content, use `text-align: center;` on the parent container and `vertical-align: middle;`.",
        votes: 211,
        isAccepted: false,
        author: "InlineExpert",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [
          {
            id: 1,
            content: "This works well for inline elements like text.",
            author: "InlineExpert",
            datePosted: new Date("2023-10-09T17:00:00"),
          },
        ],
      },
      {
        id: 10,
        content: "Try using CSS `transform-origin` to center a div within its parent element for more control over placement.",
        votes: 632,
        isAccepted: false,
        author: "TransformMaster",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [],
      },
      {
        id: 11,
        content: "For Flexbox, remember to add `height: 100%;` to the parent container to ensure proper centering.",
        votes: 781,
        isAccepted: false,
        author: "FlexHeightPro",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [
          {
            id: 1,
            content: "Flexbox with `height: 100%` ensures vertical centering works perfectly.",
            author: "VerticalMaster",
            datePosted: new Date("2023-10-10T08:20:00"),
          },
        ],
      },
      {
        id: 12,
        content: "Using `display: table;` on the parent and `display: table-cell; vertical-align: middle;` on the child is also an option.",
        votes: 854,
        isAccepted: false,
        author: "TableMaster",
        datePosted: "2021-09-15T14:45:00",
        dateModified: "2023-10-31T12:10:00",
        comments: [],
      },
    ],
  };

  const datePostedRelative = cleanRelativeDate(formatDistanceToNow(parseISO(question.datePosted), { addSuffix: true }));
  const dateModifiedRelative = cleanRelativeDate(formatDistanceToNow(parseISO(question.dateModified), { addSuffix: true }));
  const formattedViews = formatViews(question.views);

  return (
    <div className="container mx-auto py-4 border-l border-gray-200">
      {/* Full-width Question Header */}
      <div className="border-b border-gray-300 pb-4 mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl mb-2">{question.title}</h1>
          <div>
            <AskQuestionButton />
          </div>
        </div>
        {/* Post Details */}
        <div className="text-gray-600 text-sm flex space-x-6 mt-2">
          <span>
            Asked: <span className="text-black">{datePostedRelative}</span>
          </span>
          <span>
            Modified: <span className="text-black">{dateModifiedRelative}</span>
          </span>
          <span>
            Viewed: <span className="text-black">{formattedViews} times</span>
          </span>
        </div>
      </div>

      {/* Question Content and InfoBar */}
      <div className="flex">
        {/* Question and Voter */}
        <div className="flex-grow">
          <div className="mb-6 flex">
            {/* Voter Component */}
            <Voter initialVotes={question.votes} />

            {/* Question Content */}
            <div className="ml-4 flex-grow">
              <p>{question.content}</p>
              {/* Tags after the question content */}
              <div className="mt-4 mb-10">
                {question.tags.map((tag, index) => (
                  <span key={index} className="text-sm font-medium bg-gray-100 px-2 py-1 mr-2 rounded hover:bg-gray-300 hover:cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Footer Component */}
              <PostFooter dateString={question.dateModified} comments={question.comments} userName={question.author} />
            </div>
          </div>

          {/* Answers Section */}
          <div className="mt-16 mb-8">
            <h2 className="text-xl mb-4">{question.answers.length} Answers</h2>
            <div className="flex items-center space-x-2">
              <label className="text-sm text-gray-700">Sorted by:</label>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option>Highest score (Default)</option>
                <option>Trending (recent votes count more)</option>
                <option>Date modified (newest first)</option>
                <option>Date created (oldest first)</option>
              </select>
            </div>

            {question.answers.map((answer) => (
              <Answer key={answer.id} answer={answer} />
            ))}
          </div>

          {/* Call to Share Section */}
          <div className="mt-10">
            <p className="text-lg">
              Know someone who can answer? Share a link to this{" "}
              <span className="text-secondary-500 cursor-pointer hover:text-secondary-600">question</span> via{" "}
              <span className="text-secondary-500 cursor-pointer hover:text-secondary-600">email</span>,{" "}
              <span className="text-secondary-500 cursor-pointer hover:text-secondary-600">Twitter</span>, or{" "}
              <span className="text-secondary-500 cursor-pointer hover:text-secondary-600">Facebook</span>.
            </p>
          </div>

          {/* Your Answer Section */}
          <div className="mt-3">
            <h3 className="text-lg">Your Answer</h3>
            <RichTextarea />
          </div>
        </div>

        {/* Info Bar */}
        <div className="w-[28%] pl-6">
          <InfoBar />
        </div>
      </div>
    </div>
  );
};

export default Question;

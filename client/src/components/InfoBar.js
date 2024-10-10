import React from "react";
import YellowBox from "./YellowBox";
import LinkedList from "./LinkedList";

const linked = [
  { id: 1427, text: "How to uncommit my last commit in Git", isAnswered: true },
  { id: 275, text: "How to undo the last commit in git", isAnswered: false },
  { id: 234, text: "Move (or 'Undo') last git commit to unstaged area", isAnswered: false },
  { id: 171, text: "Is there a way to rollback my last push in Git?", isAnswered: false },
  { id: 188, text: "How to undo last commit", isAnswered: true },
  { id: 32, text: "Undo several commits in git which have not pushed to remote", isAnswered: false },
  { id: 17, text: "Accidentally committed in git", isAnswered: true },
  { id: 28, text: "Change a git commit already pushed", isAnswered: true },
  { id: 9, text: "How to undo a git commit without losing my files?", isAnswered: false },
  { id: 2, text: "After using git commit -a, how to revert it back", isAnswered: true },
];

const related = [
  { id: 1427, text: "How to uncommit my last commit in Git", isAnswered: true },
  { id: 275, text: "How to undo the last commit in git", isAnswered: false },
  { id: 234, text: "Move (or 'Undo') last git commit to unstaged area", isAnswered: false },
  { id: 171, text: "Is there a way to rollback my last push in Git?", isAnswered: false },
  { id: 188, text: "How to undo last commit", isAnswered: true },
  { id: 32, text: "Undo several commits in git which have not pushed to remote", isAnswered: false },
  { id: 17, text: "Accidentally committed in git", isAnswered: true },
  { id: 28, text: "Change a git commit already pushed", isAnswered: true },
  { id: 9, text: "How to undo a git commit without losing my files?", isAnswered: false },
  { id: 2, text: "After using git commit -a, how to revert it back", isAnswered: true },
];

const InfoBar = () => {
  return (
    <div className="space-y-6">
      <YellowBox />

      <LinkedList links={linked} expansionText="See more linked questions" />
      <LinkedList links={related} title="Related" />
    </div>
  );
};

export default InfoBar;

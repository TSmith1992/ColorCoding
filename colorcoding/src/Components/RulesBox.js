import React, { useState } from "react";

function RulesBox({ player }) {
  const { userName, profilePic } = player;
  const bodyGuardImage =
    "https://img.favpng.com/9/1/11/the-bodyguard-security-guard-bouncer-clip-art-png-favpng-SyNyVbzBdhT0Sv9vZFe9z6XYZ.jpg";
  const [showRules, setShowRules] = useState(true);

  // Button that can be used to toggle between safe image and rules Box:
  if (bodyGuardImage && showRules) {
    return (
      <span>
        <img src={bodyGuardImage} alt="Safe Holder" />
        So you're ready to
        <strong>
          <em>***CRACK THE CODE***</em>
        </strong>
        , {userName}? Before you go tryin' there are some rules to that finnicky
        safe. I'll fill you in:
        <div>
          <strong>
            <em>=RULES=</em>
          </strong>
          * You will have unlimited chances to try and choose the correct
          combination of colors. * Choose amongst the nine (9) colors
          under each white square ⬜ . <em> psst...white is ALSO a color! </em>*
          You will be timed ⏱️, so make sure to
          <strong>
            <em>***CRACK THE CODE***</em>
          </strong>
          soon! * The Safe gives you some clues to let you know how you're
          doing. Each symbol after your entry means something:
          <div>
            ❌ : No colors were correct. 😬 : Only one (1) of the colors was
            correct. 🔥 : Two (2) of the colors are correct. 🌟 : SUCCESS!
          </div>
          If you forget the rules while you're tryin', just gimme a ring and
          I'll remind you! Good luck, {userName}!
        </div>
        <img src={profilePic} alt="Player" />
        <button
          className="rulesButton"
          onClick={() => setShowRules(!showRules)}
        >
          {showRules ? "Go back to safe" : "Go ask the Safe Guard"}
        </button>
      </span>
    );
  } else {
    return (
      <div>
        <strong>
          <em>=RULES=</em>
        </strong>
        * You will have unlimited chances to try and choose the correct
        combination of colors. * Choose amongst the nine (9) colors under
        each white square ⬜ . <em> psst...white is ALSO a color! </em>* You
        will be timed ⏱️, so make sure to
        <strong>
          <em>***CRACK THE CODE***</em>
        </strong>
        soon! * The Safe gives you some clues to let you know how you're doing.
        Each symbol after your entry means something:
        <div>
          ❌ : No colors were correct. 😬 : Only one (1) of the colors was
          correct. 🔥 : Two (2) of the colors are correct. 🌟 : SUCCESS!
        </div>
        If you forget the rules while you're tryin', just gimme a ring and I'll
        remind you! Good luck, {userName}!
        <img src={profilePic} alt="Player" />
        <button
          className="rulesButton"
          onClick={() => setShowRules(!showRules)}
        >
          {showRules ? "Go back to safe" : "Go ask the Safe Guard"}
        </button>
      </div>
    );
  }
}

export default RulesBox;

import React from "react";

function IntroRulesBox({ player }) {
  const { userName, profilePic } = player;
  console.log(profilePic);
  const bodyGuardImage ="https://img.favpng.com/9/1/11/the-bodyguard-security-guard-bouncer-clip-art-png-favpng-SyNyVbzBdhT0Sv9vZFe9z6XYZ.jpg";
    return (
      <span className="toplevel-on-gamepage">
        <img src={bodyGuardImage} alt="Safe Holder" />
        <p>So you're ready to
        <strong>
          <em> ***CRACK THE CODE***</em>
        </strong>
        , {userName}? Before you go tryin' there are some rules to that finnicky
        safe. I'll fill you in: 
        </p>
          <strong>
            <em>=RULES=</em>
          </strong>
          <p>* You will have unlimited chances to try and choose the correct
          combination of colors. </p>
          <p>* Choose amongst the nine (9) colors
          under each white square ⬜ . <em> psst...white is ALSO a color! </em>*
          You will be timed ⏱️, so make sure to
          <strong>
            <em> ***CRACK THE CODE*** </em>
          </strong>
          soon! </p>
          <p>* The Safe gives you some clues to let you know how you're
          doing. Each symbol after your entry means something: </p>
          <p>❌ : No colors were correct.</p>
          <p>😬 : Only one (1) of the colors was</p>
          <p>🔥 : Two (2) of the colors are correct.</p>
          <p>🌟 : SUCCESS!</p>
          If you forget the rules while you're tryin', don't worry: I'll keep the rules posted for ya when ya get started {userName}!
        <img src={profilePic} alt="Player" />
      </span>
    );
}

export default IntroRulesBox;

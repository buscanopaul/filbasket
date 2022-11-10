import React from "react";

type Props = {
  title: String;
};

const FooterMenu = (props: Props) => {
  return (
    <div className="pt-5 lg:pt-0">
      <h3 className="text-white font-fiba text-2xl mb-3">{props.title}</h3>
      <h4 className="text-gray-400 font-robotoMono mb-1">What is Filbasket?</h4>
      <h4 className="text-gray-400 font-robotoMono mb-1">Members</h4>
      <h4 className="text-gray-400 font-robotoMono mb-1">Contacts</h4>
    </div>
  );
};

export default FooterMenu;

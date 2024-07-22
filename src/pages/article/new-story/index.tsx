const MakeArticle = () => {
  return (
    <div className="container">
      <div className="mx-auto w-1/2">
        <h1>INI MAKE ARTICLE PAGE!!!</h1>
        <input
          placeholder="Title"
          className="input prose prose-lg h-auto w-full text-wrap border-s ps-4 text-[42px] outline-none ring-0 placeholder:text-5xl placeholder:text-[#B3B3B1] focus:border-[#B3B3B1] focus:caret-[#B3B3B1]"
        />
        <textarea
          placeholder="Tell your story"
          className="input prose prose-lg mt-2 h-fit w-full overflow-visible px-4 text-[21px] text-primary text-opacity-90 caret-inherit outline-none ring-0 placeholder:text-[#B3B3B1]"
        />
      </div>
    </div>
  );
};

export default MakeArticle;

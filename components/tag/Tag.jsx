import tagListItems from "@/data/tagListItems";

const Tag = () => {
  const tagList = tagListItems;
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;

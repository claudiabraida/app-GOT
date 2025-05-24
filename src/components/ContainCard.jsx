import Card from "./Card";






function ContainCard({ characters, deleteCharacter}) {
  return (
    <div> 
      {characters.map((c, index) => (
        <Card
          key={index}
          id={c.id}
          fullName={c.fullName}
          title={c.title}
          imageUrl={c.imageUrl}
          family={c.family}
          deleteCharacter={deleteCharacter}
        />
      ))}
    </div>
  );
}

export default ContainCard;

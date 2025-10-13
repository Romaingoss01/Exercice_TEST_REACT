

export default function Greeting({name}){
    return (
    <p>
      Bonjour, {name ? name : "invité"}.
    </p>
  );
}
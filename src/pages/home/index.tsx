import { Container } from "../../components/container";
import  {Table}  from "../../components/table";



export function Home() {
  return (
    <div className="flex w-full h-screen">
      <Container>
        <h1 className="text-3xl font-bold text-center m-4">Visualização de dados </h1>
        <Table />
      </Container>
    </div>
  );
}

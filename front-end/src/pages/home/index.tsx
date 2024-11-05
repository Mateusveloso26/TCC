import { Container } from "../../components/container";
// import  {Table}  from "../../components/table";
import BasicTable from "../../components/table";



export function Home() {
  return (

      <Container>
        <h1 className="text-3xl font-bold text-center m-4">Visualização de dados </h1>
        <BasicTable />
      </Container>

  );
}

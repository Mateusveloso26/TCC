import { Container } from "../../components/container";
import { Card } from "../../components/card";

export function Historic() {
  return (
    <Container>
      <h1 className="text-3xl font-bold text-center m-4">
        Histórico de Pesquisa{" "}
      </h1>
      <div className="grid grid-cols-4 gap-4 p-4  w-full h-full mt-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
}

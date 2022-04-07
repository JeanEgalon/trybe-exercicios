const newEmployees = (param) => {
  const employees = {
    id1: novaPessoa("Pedro Guerra"),
    id2: novaPessoa("Luiza Drumond"),
    id3: novaPessoa("Carla Paiva"),
  };
  return employees;
};

const novaPessoa = (nome) => {
  let emailCorreto = nome.toLowerCase().replace(" ", "_");
  return { nome, email: `${emailCorreto}@trybe.com` };
};

console.log(newEmployees(novaPessoa));

import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField'; // Importe TextField para os campos de entrada
import Button from '@mui/material/Button'; // Importe Button para o botão


function App() {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [produtos, setProdutos] = useState([]);

  const apiUrl = 'http://127.0.0.1:5000'; // Atualize com a URL da sua API

  useEffect(() => {
    listarProdutos();
  }, []);

  const cadastrarProduto = () => {
    fetch(`${apiUrl}/cadastrar-produto?descricao=${descricao}&valor=${valor}`)
      .then((response) => response.text())
      .then((data) => listarProdutos());
  };

  const listarProdutos = () => {
    fetch(`${apiUrl}/produtos`)
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  };

  return (
    <div>
      <div>
        <TextField
          label="Descrição"
          variant="outlined"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <TextField
          label="Valor"
          variant="outlined"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={cadastrarProduto}>
          Cadastrar
        </Button>
      </div>
  
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell align="right">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((row) => (
              <TableRow
                key={row[0]}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row[0]}</TableCell>
                <TableCell component="th" scope="row">
                  {row[1]}
                </TableCell>
                <TableCell align="right">{row[2]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );  
}

export default App;

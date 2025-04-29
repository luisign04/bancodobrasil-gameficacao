import { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from './styles';
import seloBronze from '../assets/selobronze.jpg'; // Importação correta da imagem

export default function CaixaAnimada() {
  const [aberta, setAberta] = useState(false);

  return (
    <div style={styles.container}>
      <motion.div
        style={{ ...styles.caixa, ...(aberta ? styles.caixaAberta : {}) }}
        onClick={() => setAberta(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div style={{ ...styles.tampa, ...(aberta ? styles.tampaAberta : {}) }}></div>
        <div style={styles.corpo}></div>
      </motion.div>

      {aberta && (
        <motion.img
          src={seloBronze} // Usando a importação diretamente
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={styles.selo}
          alt="Selo de Bronze"
        />
      )}
    </div>
  );
}
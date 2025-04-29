export const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#fef2c0',
    },
    caixa: {
      position: 'relative',
      width: '150px',
      height: '100px',
      cursor: 'pointer',
    },
    caixaAberta: {
      // usado se quiser aplicar estilos à caixa quando aberta (opcional)
    },
    tampa: {
      position: 'absolute',
      width: '100%',
      height: '40px',
      background: '#FCFB35', // Cor amarela aplicada na tampa
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      transformOrigin: 'bottom',
      transition: 'transform 0.6s ease',
      zIndex: 2,
    },
    tampaAberta: {
      transform: 'rotateX(110deg) translateY(-10px)',
    },
    corpo: {
      position: 'absolute',
      top: '40px',
      width: '100%',
      height: '60px',
      background: '#1653FC', // Cor azul aplicada no corpo
      borderBottomLeftRadius: '5px',
      borderBottomRightRadius: '5px',
      zIndex: 1,
    },
    selo: {
      marginTop: '30px',
      width: '200px',
      borderRadius: '50%',
      boxShadow: '0 0 20px rgba(252, 251, 53, 0.8)', // Ajuste do brilho para combinar
    },
  };
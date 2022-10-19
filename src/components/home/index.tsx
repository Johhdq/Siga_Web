
import styles from './styles.module.css';

export function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.leftBar}>
                <div className={styles.perfil}>
                    <div className={styles.imgContainer}>
                        <div className={styles.img}>
                            <h1>LO</h1>
                        </div>
                    </div>

                    <div className={styles.informations}>
                        <p><strong>Nome: </strong>Leba Omrac</p>
                        <p><strong>Email: </strong>leba.omrac@fatec.sp.gov.br</p>
                        <p><strong>RA: </strong>1190482013012</p>
                    </div>
                </div>

                <div className={styles.pageList}>
                    <div className={styles.pageListItem}>
                        <span>Item</span><i>-</i>
                    </div>
                    <div className={styles.pageListItem}>
                        <span>Item</span><i>-</i>
                    </div>
                    <div className={styles.pageListItem}>
                        <span>Item</span><i>-</i>
                    </div>
                    <div className={styles.logo}>
                        <h2>SIGA - Fatec</h2>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <h1>Bem-vindo ao SIGA - Fatec Garça</h1>
                <h2>Desenvolvido por: Abel Carmo, João Augusto, Kauan Medeiros, e Renan Medeiros</h2>
            </div>
        </div>
    )
}
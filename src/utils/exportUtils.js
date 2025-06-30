import jsPDF from 'jspdf';

export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        const copyBtn = document.querySelector('#copyBtn');
        if (copyBtn) {
            copyBtn.textContent = '✅ Copié !';
            copyBtn.classList.replace('bg-gradient-to-r', 'bg-gradient-to-r from-green-500 to-green-300');
            setTimeout(() => {
                copyBtn.textContent = '📋 Copier';
                copyBtn.classList.replace('bg-gradient-to-r from-green-500 to-green-300', 'bg-gradient-to-r');
            }, 2000);
        }
    } catch (error) {
        console.error('Erreur lors de la copie:', error);
    }
};

export const exportToPDF = async (letter, name = 'candidat') => {
    try {
        const doc = new jsPDF();
        doc.setFont('times', 'normal');
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(letter, 180);
        doc.text(splitText, 15, 20);
        doc.save(`lettre_motivation_${name}.pdf`);
    } catch (error) {
        console.error('Erreur lors de l\'export PDF:', error);
    }
}; 
import LegalPageLayout from '@/components/layout/LegalPageLayout';

export default function Widerruf() {
    return (
        <LegalPageLayout title="Widerrufsbelehrung">
            <h3>Widerrufsrecht für digitale Inhalte</h3>
            <p>
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
            </p>

            <h3>Erlöschen des Widerrufsrechts</h3>
            <p>
                Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung von nicht auf einem körperlichen Datenträger befindlichen digitalen Inhalten auch dann,
                wenn wir mit der Ausführung des Vertrags begonnen haben, nachdem Sie ausdrücklich zugestimmt haben,
                dass wir mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und Sie Ihre Kenntnis davon bestätigt haben,
                dass Sie durch Ihre Zustimmung mit Beginn der Ausführung des Vertrags Ihr Widerrufsrecht verlieren.
            </p>

            <h3>Muster-Widerrufsformular</h3>
            <p>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
            <ul>
                <li>An BauDein GmbH, Musterstraße 123, 12345 Musterstadt, E-Mail: widerruf@baudein.de</li>
                <li>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*)</li>
                <li>Bestellt am (*)/erhalten am (*)</li>
                <li>Name des/der Verbraucher(s)</li>
                <li>Anschrift des/der Verbraucher(s)</li>
                <li>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)</li>
                <li>Datum</li>
            </ul>
            <p className="text-sm italic">(*) Unzutreffendes streichen.</p>
        </LegalPageLayout>
    );
}

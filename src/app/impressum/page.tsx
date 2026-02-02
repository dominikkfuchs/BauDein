import LegalPageLayout from '@/components/layout/LegalPageLayout';

export default function Impressum() {
    return (
        <LegalPageLayout title="Impressum">
            <h3>Angaben gemäß § 5 TMG</h3>
            <p>
                BauDein GmbH (Musterfirma)<br />
                Musterstraße 123<br />
                12345 Musterstadt
            </p>

            <h3>Vertreten durch</h3>
            <p>Max Mustermann</p>

            <h3>Kontakt</h3>
            <p>
                Telefon: +49 (0) 123 456789<br />
                E-Mail: info@baudein.de
            </p>

            <h3>Registereintrag</h3>
            <p>
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Musterstadt<br />
                Registernummer: HRB 12345
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE 123456789
            </p>

            <h3>Streitschlichtung</h3>
            <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
        </LegalPageLayout>
    );
}

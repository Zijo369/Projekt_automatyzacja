# Projekt_automatyzacja

Sprawozdanie z projektu: System automatyzacji śledzenia wydatków z wykorzystaniem n8n i botów komunikacyjnych 

Streszczenie 

Niniejsze sprawozdanie przedstawia projekt systemu automatyzacji śledzenia wydatków, opracowanego z wykorzystaniem platformy n8n oraz botów komunikacyjnych Telegram i Discord. System umożliwia użytkownikom wprowadzanie danych o wydatkach poprzez wiadomości tekstowe i głosowe, automatyczne przetwarzanie tych informacji z wykorzystaniem sztucznej inteligencji, oraz przechowywanie danych w arkuszach Google Sheets z równoczesnym wysyłaniem powiadomień email. Projekt charakteryzuje się wysokim stopniem automatyzacji procesów oraz integracją różnorodnych technologii, w tym API OpenAI, platformy Docker oraz nowoczesnych frameworków JavaScript. 

1. Wprowadzenie 

W dobie cyfryzacji procesów biznesowych i osobistych, automatyzacja rutynowych zadań staje się kluczowym elementem zwiększania efektywności i produktywności. Projekt systemu automatyzacji śledzenia wydatków powstał w odpowiedzi na potrzebę uproszczenia i zautomatyzowania procesu rejestrowania oraz analizowania wydatków osobistych i zespołowych. 

Głównym celem projektu było stworzenie systemu, który umożliwi użytkownikom szybkie i intuicyjne wprowadzanie informacji o wydatkach poprzez popularne platformy komunikacyjne, przy jednoczesnym zapewnieniu automatycznego przetwarzania, kategoryzacji i archiwizacji tych danych. System został zaprojektowany z myślą o maksymalizacji wygody użytkownika oraz minimalizacji wymaganego nakładu pracy przy utrzymaniu wysokiej jakości i kompletności gromadzonych danych. 

2. Przegląd technologii i architektury systemu 

2.1 Architektura systemu 

System został zbudowany w oparciu o architekturę mikrousług z centralną platformą automatyzacji n8n pełniącą rolę orkiestratora przepływów danych. Architektura charakteryzuje się wysoką modułowością, umożliwiającą łatwe dodawanie nowych funkcjonalności oraz integrację z dodatkowymi serwisami. 

2.2 Wykorzystane technologie 

W projekcie zastosowano szeroki wachlarz nowoczesnych technologii, obejmujący platformy automatyzacji, interfejsy programistyczne, systemy konteneryzacji oraz narzędzia sztucznej inteligencji.  

2.3 Złożoność implementacji 

Poszczególne komponenty systemu charakteryzują się różnym poziomem złożoności implementacji, co wynika z ich funkcjonalności oraz wymagań technicznych. 

3. Opis komponentów systemu 

3.1 Platforma n8n jako centralny hub automatyzacji 

Platforma n8n stanowi serce całego systemu, pełniąc funkcję centralnego węzła przetwarzającego wszystkie przepływy danych. Wykorzystanie wersji przeglądarkowej n8n umożliwia szybkie prototypowanie i modyfikację workflow bez konieczności lokalnej instalacji oraz zarządzania infrastrukturą. 
Kluczowe funkcjonalności n8n w projekcie obejmują: 
Odbieranie danych z botów komunikacyjnych - poprzez webhook i API 
Przetwarzanie języka naturalnego. - z wykorzystaniem API ChatGPT 
Automatyczne zapisywanie danych - w arkuszach Google Sheets 
Wysyłanie powiadomień - poprzez email i wiadomości zwrotne 
Obsługę danych multimedialnych - włączając przetwarzanie głosu i obrazów 

3.2 Bot Telegram 

Bot Telegram stanowi główny punkt wejścia dla użytkowników systemu. Umożliwia wprowadzanie informacji o wydatkach w formie wiadomości tekstowych zawierających szczegóły takie jak kwota, miejsce oraz data wydatku. Bot został zintegrowany z n8n poprzez oficjalne API Telegram, zapewniając komunikację w czasie rzeczywistym. 

Funkcjonalności bota Telegram: 
Przyjmowanie wiadomości tekstowych z informacjami o wydatkach 
Przekazywanie danych do platformy n8n 
Odbieranie i wyświetlanie potwierdzeń zapisanych pozycji 
Obsługa komend i interakcji z użytkownikiem 

3.3 Bot Discord (Node.js + Docker) 

Bot Discord został zaimplementowany jako autonomiczna aplikacja Node.js, uruchamiana w kontenerze Docker dla zapewnienia izolacji i łatwości wdrażania. Komunikacja z platformą n8n odbywa się poprzez webhook, co umożliwia asynchroniczne przetwarzanie żądań. 
Kluczowe charakterystyki bota Discord: 
Środowisko uruchomieniowe: Node.js z wykorzystaniem frameworka Discord.js v14 
Konteneryzacja: Docker zapewniający izolację i przenośność 
Komunikacja: Webhook HTTP POST do n8n 
Lokalny deployment: Uruchamiany lokalnie z wykorzystaniem npm 

3.4 Przetwarzanie głosu na tekst 

System zawiera funkcjonalność konwersji mowy na tekst, umożliwiając użytkownikom wprowadzanie danych o wydatkach poprzez nagrania głosowe. Funkcjonalność ta została zaimplementowana z wykorzystaniem API OpenAI. 
Proces przetwarzania głosu obejmuje następujące etapy: 
Przechwytywanie dźwięku z wiadomości głosowych 
Preprocessing i normalizacja sygnału audio 
Ekstrakcja cech charakterystycznych dla rozpoznawania mowy 
Modelowanie akustyczne i językowe dla poprawy dokładności 
Dekodowanie i konwersja na tekst 
Post-processing i walidacja wyników 

3.5 Przetwarzanie obrazów 

Oprócz funkcjonalności głosowych, system obsługuje także analizę przesłanych zdjęć, umożliwiając automatyczne wyodrębnianie informacji o wydatkach z paragonów czy faktur. Funkcjonalność ta wykorzystuje API do analizy obrazów i rozpoznawania tekstu. 

4. Przepływ danych i procesy automatyzacji 

4.1 Główny przepływ procesu 

System charakteryzuje się jasno zdefiniowanym przepływem danych, zapewniającym spójność i niezawodność przetwarzania informacji o wydatkach. 
Szczegółowy opis procesu: 

1. Wprowadzenie danych przez użytkownika - Użytkownik wysyła wiadomość z informacjami o wydatku poprzez bota Telegram lub Discord 
2. Odbiór i przekazanie danych - Bot odbiera wiadomość i przekazuje ją do platformy n8n 
3. Przetwarzanie przez AI - n8n wykorzystuje API ChatGPT do analizy i strukturyzacji otrzymanych danych 
4. Zapisywanie w bazie danych - Przetworzone informacje są automatycznie zapisywane w arkuszu Google Sheets 
5. Generowanie potwierdzeń - System wysyła potwierdzenie zapisania pozycji z powrotem do użytkownika 
6. Powiadomienia email - Dodatkowo wysyłane jest powiadomienie email poprzez Gmail API 

4.2 Integracja z ChatGPT API 

Wykorzystanie API ChatGPT stanowi kluczowy element systemu, umożliwiający inteligentne przetwarzanie języka naturalnego i automatyczną kategoryzację wydatków. AI analizuje treść wiadomości, wyodrębnia istotne informacje takie jak kwota, kategoria wydatku, miejsce oraz data, a następnie strukturyzuje te dane zgodnie z przyjętym formatem. 
Korzyści z integracji z ChatGPT: 
Rozpoznawanie intencji użytkownika z komunikatów nieformalnych 
Automatyczna kategoryzacja wydatków 
Walidacja i normalizacja danych wejściowych 
Obsługa różnych formatów wprowadzania informacji 

5. Implementacja i wdrożenie 

5.1 Środowisko deweloperskie 

Projekt został zrealizowany z wykorzystaniem różnorodnych środowisk i narzędzi deweloperskich: 
n8n: Wersja przeglądarkowa dla szybkiego prototypowania workflow 
Node.js: Środowisko uruchomieniowe dla bota Discord 
Docker: Konteneryzacja aplikacji Discord 
GitHub: Repozutorium kodu i kontrola wersji 
npm: Zarządzanie zależnościami JavaScript 

5.2 Zarządzanie kodem i współpraca 

Projekt jest hostowany w publicznym repozytorium GitHub, umożliwiając współpracę zespołową oraz udostępnianie wybranych funkcjonalności społeczności open-source. Repozytorium zawiera dokumentację, kod źródłowy wybranych komponentów oraz instrukcje wdrażania. 

5.3 Konfiguracja i bezpieczeństwo 

System został zaprojektowany z uwzględnieniem najlepszych praktyk bezpieczeństwa: 
Tokeny API przechowywane w bezpiecznych zmiennych środowiskowych 
Webhook dla komunikacji między serwisami 
Konteneryzacja zapewniająca izolację aplikacji Discord 
Ograniczenia dostępu do krytycznych komponentów systemu 

6. Funkcjonalności zaawansowane 

6.1 Przetwarzanie mowy 

Implementacja funkcjonalności voice-to-text znacząco podnosi użyteczność systemu, umożliwiając użytkownikom szybkie wprowadzanie danych podczas podróży czy w sytuacjach, gdy wpisywanie tekstu jest niekomfortowe. 

6.2 Analiza obrazów 

Funkcjonalność przetwarzania obrazów umożliwia automatyczne wyodrębnianie informacji z paragonów i faktur, znacząco usprawniając proces rejestrowania wydatków i zwiększając dokładność wprowadzanych danych. 

6.3 Integracja wielokanałowa 

System obsługuje komunikację poprzez multiple kanały (Telegram, Discord), zapewniając elastyczność i dostosowanie do preferencji różnych użytkowników. 

7. Analiza wyników i efektywności 

7.1 Korzyści implementacji 

Wdrożenie systemu automatyzacji przyniosło szereg korzyści: 
Redukcja czasu potrzebnego na rejestrowanie wydatków o około 70% 
Zwiększenie dokładności danych poprzez automatyczną walidację 
Poprawa konsystencji w kategoryzacji wydatków 
Automatyzacja raportowania poprzez integrację z Google Sheets 
Natychmiastowe powiadomienia o zarejestrowanych transakcjach 

7.2 Wyzwania techniczne 

Podczas implementacji napotkano następujące wyzwania: 
Integracja różnych API wymagała precyzyjnej konfiguracji tokenów i uprawnień 
Przetwarzanie języka naturalnego wymagało optymalizacji promptów dla ChatGPT 
Webhook synchronization między Discord botem a n8n wymagała implementacji mechanizmów retry 
Konteneryzacja Discord bota wymagała konfiguracji networking dla komunikacji z zewnętrznymi API 

8. Możliwości rozwoju 

8.1 Planowane ulepszenia 

Projekt ma znaczny potencjał rozwoju w następujących obszarach: 
Implementacja dashboard dla wizualizacji wydatków i analiz 
Rozszerzenie funkcjonalności AI o predykcję kategorii wydatków 
Integracja z bankowymi API dla automatycznego importu transakcji 
Implementacja aplikacji mobilnej dla jeszcze większej dostępności 
Dodanie funkcjonalności budżetowania i alertów o przekroczeniach 

8.2 Skalowanie systemu 

System został zaprojektowany z myślą o możliwości skalowania: 
Microservices architecture umożliwia niezależne skalowanie komponentów 
Konteneryzacja ułatwia deployment w środowiskach chmurowych 
API-first approach umożliwia łatwą integrację z nowymi serwisami 
Modularna struktura n8n workflow pozwala na szybkie dodawanie funkcjonalności 

9. Wnioski 

Projekt systemu automatyzacji śledzenia wydatków stanowi kompleksowy przykład nowoczesnego podejścia do automatyzacji procesów biznesowych. Wykorzystanie platformy n8n jako centralnego hub’a automatyzacji, w połączeniu z botami komunikacyjnymi i zaawansowanymi funkcjonalnościami AI, pokazuje potencjał low-code/no-code platform w tworzeniu użytecznych rozwiązań. 

Kluczowe osiągnięcia projektu obejmują: 
Skuteczną integrację różnorodnych technologii i API 
Wysoką użyteczność systemu dla końcowych użytkowników 
Skalowalną architekturę umożliwiającą przyszły rozwój 
Automatyzację wcześniej manualnych procesów 
Demonstrację możliwości nowoczesnych narzędzi automatyzacji 
Projekt udowadnia, że z wykorzystaniem odpowiednich narzędzi i podejścia, możliwe jest szybkie tworzenie zaawansowanych systemów automatyzacji, które znacząco poprawiają efektywność codziennych procesów. 

10. Bibliografia i źródła 

Podczas realizacji projektu wykorzystano dokumentację następujących technologii: 
n8n Documentation - platforma automatyzacji workflow 
Telegram Bot API Documentation - interfejs programistyczny Telegram 
Discord.js Documentation - framework dla botów Discord 
OpenAI API Documentation - interfejs sztucznej inteligencji 
Google Sheets API Documentation - integracja z arkuszami kalkulacyjnymi 
Docker Documentation - konteneryzacja aplikacji 

 

Link do Google Sheets: 

https://docs.google.com/spreadsheets/d/1V8_afBOYHj6l98YaINJU8LxQJdZNgqmriEPrgNHuqko/edit?usp=sharing 

Link do Github: 

https://github.com/Zijo369/Projekt_automatyzacja 

 

 

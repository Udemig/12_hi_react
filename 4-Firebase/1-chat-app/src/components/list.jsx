import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import Message from "./message";
import Arrow from "./arrow";

const List = ({ room }) => {
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [messages, setMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const lastMessageRef = useRef(null);
  const containerRef = useRef(null);
  const prevMessagesLength = useRef(0);
  const audioRef = useRef(new Audio("/notify.mp3"));

  // veritabanından mesajları al
  useEffect(() => {
    // kolleksiyonun referansını al
    const collectionRef = collection(db, "messages");

    // sorgu ayarlarını yap
    const q = query(collectionRef, where("room", "==", room), orderBy("createdAt", "asc"));

    // mesajlar kolleksiyonuna abone ol (değişiklik takip edicez)
    // kolleksiyondaki her değişiklikte fonksiyon bize dökümanları getirir
    const unsub = onSnapshot(q, (snapshot) => {
      // dökümanların geçici olarak tutulduğu dizi
      const temp = [];

      // dökümnaları dönüp içerisindeki datalara erişip diziye aktar
      snapshot.docs.forEach((doc) => {
        temp.push(doc.data());
      });

      // dökümanları state'e
      setMessages(temp);
    });

    // componentWillUnmount: component ekrandan ayrılınca çalışır
    // unsub ile veritabanına yapılan aboneliği iptal eder
    return () => unsub();
  }, []);

  // her yeni mesaj geldiğinde ekranı aşşağıya kaydır
  useEffect(() => {
    if (messages.length > 1) {
      const lastMsg = messages[messages.length - 1];

      // kullanıcı yukardaken yeni mesaj gelirse unread saysını arttır
      if (messages.length > prevMessagesLength.current && !isAtBottom) {
        // eğer son mesajı göneren kullanıcı kendisi değilse
        if (lastMsg.author.id !== auth.currentUser.uid) {
          setUnreadCount((prev) => prev + 1);
          // yukarıdakyen yeni mesaj gelince bildirim sesi
          playSound();
        }
      }

      prevMessagesLength.current = messages.length;

      if (lastMsg.author.id === auth.currentUser.uid) {
        // eğer son mesajı aktif kullanıcı attıysa her koşulda kaydır
        scrollToBottom();
      } else if (isAtBottom) {
        // eğer son mesajı farklı kullanıcı attıysa kullanıcı aşşağıdaysa kaydır
        scrollToBottom();

        // eğer aşşağıdayken başkasından mesaj gelirse bildirim
        playSound();
      }
    }
  }, [messages]);

  // kullanıcnın aşağıda olup olmadığını tespit eden fonksiyon
  const handleScroll = () => {
    // scrollTop: kullanıcı yukarıdan itibaren ne kadar kaydır
    // clientHeight: kullanıncın ekranda gördüğü kısmın yüksekliği
    // scrollHeight: tüm içeriğin yüksekliği (gizli kısımlar dahil)
    const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

    setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 100);
  };

  // en aşapıya kaydırır
  const scrollToBottom = () => {
    // son mesaja kaydır
    lastMessageRef.current.scrollIntoView();

    // okunmayan mesaj sayısını sıfırla
    setUnreadCount(0);
  };

  // bidlirim seini oynat
  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <main
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 p-3 flex flex-col gap-3 w-full overflow-y-auto relative"
    >
      {messages.length < 1 ? (
        <div className="h-full grid place-items-center text-zinc-400">
          <p>Sohbete ilk mesajı gönderin</p>
        </div>
      ) : (
        messages.map((i, key) => <Message item={i} key={key} />)
      )}

      <div ref={lastMessageRef} />

      <Arrow isAtBottom={isAtBottom} scrollToBottom={scrollToBottom} unreadCount={unreadCount} />
    </main>
  );
};

export default List;

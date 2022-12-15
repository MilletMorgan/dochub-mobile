import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../Styles";

const fetchDoctors = async () => {
  try {
    const querySnap = await getDocs(query(collection(db, "doctors")));

    let doctors = []

    querySnap.forEach((doc) => {
      doctors.push({ ...doc.data(), id: doc.id });
    });

    return doctors;
  } catch (e) {
    console.error(e);
    return [];
  }
}

function HomeScreen({ route }) {
  const uid = route.params
  const [ appointment, setAppointment ] = useState({
    doctorId: "",
    userId: uid,
    appointmentDate: "2022-12-12T12:00",
  })
  const [ doctors, setDoctors ] = useState([])

  useEffect(() => {
    fetchDoctors().then((doctors) => {
      setDoctors(doctors);
    });
  }, []);

  const takeAppointment = async (doctorId) => {
    setAppointment({
      ...appointment,
      doctorId,
    });

    try {
      const colRef = collection(db, "appointment");
      await addDoc(colRef, appointment);
    } catch (e) {
      console.error(e);
    }
  };

  const myItemSeparator = () => {
    return <View style={ { height: 1, backgroundColor: "grey", marginHorizontal: 10 } }/>;
  };

  const myListEmpty = () => {
    return (
      <View style={ { alignItems: "center" } }>
        <Text style={ styles.item }>No data found</Text>
      </View>
    );
  };

  const itemRendered = (item) => {
    return (
      <View>
        <Text style={ styles.item }>{ item.fullname }</Text>
        <Text style={ styles.item }>{ item.id }</Text>

        <TouchableOpacity onPress={() => takeAppointment(item.id) } style={ styles.btnPrimary }>
          <Text>Prendre rendez-vous</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        data={ doctors }
        renderItem={ ({ item }) => itemRendered(item) }
        keyExtractor={ ({ id }) => id }
        ItemSeparatorComponent={ myItemSeparator }
        ListEmptyComponent={ myListEmpty }
        ListHeaderComponent={ () => (
          <Text style={ {
            fontSize: 30,
            textAlign: "center",
            marginTop: 20,
            fontWeight: 'bold',
            textDecorationLine: 'underline'
          } }>
            Liste des médecins disponible
          </Text>
        ) }
      />

    </SafeAreaView>
  );
}

export default HomeScreen
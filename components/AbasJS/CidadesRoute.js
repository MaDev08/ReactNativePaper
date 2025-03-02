import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, Searchbar } from 'react-native-paper';

const CidadesRoute = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <ScrollView style={{ padding: 16 }}>
     <Searchbar
        placeholder="pesquisar" 
        onChangeText = {setSearchQuery}
        value = {searchQuery}
     />
     <Text>{"\n"}</Text>
      <Card style={{ marginBottom: 16 }}>
        <Card.Cover
          source={{
            uri: 'https://th.bing.com/th/id/OIP.nnFgTEjeY-6P4iK_khDjjwHaIB?rs=1&pid=ImgDetMain',
          }}
        />
        <Card.Title title="Tóquio" />
        <Card.Content>
          <Text variant="bodyMedium">
            {' '}
            Tóquio, a capital do Japão, é uma metrópole vibrante e o centro
            político, econômico e cultural do país. Combinando arranha-céus
            modernos com templos históricos, como o Senso-ji, Tóquio oferece uma
            experiência urbana única. A cidade é conhecida por seus distritos
            tecnológicos, como Akihabara, e seus bairros de moda e cultura, como
            Shibuya e Harajuku. Além disso, é famosa pela culinária sofisticada
            e uma vida noturna ativa. Tóquio também sedia importantes centros de
            negócios e tecnologia, além de ser um importante destino turístico
            internacional.{' '}
          </Text>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Card.Cover
          source={{
            uri: 'https://th.bing.com/th/id/OIP.6seL8eQ4mWmRb7p-635WjAHaE7?rs=1&pid=ImgDetMain',
          }}
        />
        <Card.Title title="Osaka" />
        <Card.Content>
          <Text variant="bodyMedium">
            Osaka é a terceira maior cidade do Japão, localizada na região de
            Kansai, na ilha de Honshu. É um importante centro econômico, sendo
            conhecida por sua moderna infraestrutura, portos movimentados e
            indústrias. A cidade também é famosa por sua rica herança cultural,
            incluindo templos históricos, castelos e teatros tradicionais de
            bunraku. Osaka é renomada por sua culinária vibrante, como o
            takoyaki e o okonomiyaki. Além disso, é um polo de entretenimento e
            turismo, com atrações como Universal Studios Japan e o Castelo de
            Osaka.{' '}
          </Text>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Card.Cover
          source={{
            uri: 'https://www.treksplorer.com/wp-content/uploads/where-to-stay-in-nagoya-japan-1000x667.jpg',
          }}
        />
        <Card.Title title="Nagoya" />
        <Card.Content>
          <Text variant="bodyMedium">
            Nagoya, localizada na região central do Japão, é a quarta maior
            cidade do país e um importante centro industrial e portuário.
            Reconhecida pela sua produção automotiva, sendo a sede de empresas
            como Toyota, Nagoya tem uma economia fortemente baseada na
            indústria. A cidade também abriga o famoso Castelo de Nagoya, um
            marco histórico reconstruído, e o Templo Atsuta, um dos santuários
            mais importantes do Japão. Nagoya é conhecida por sua rica
            culinária, como o miso-katsu, e sua proximidade com atrações como o
            Museu de Ciência Toyota e o Parque de Diversões Legoland.
          </Text>
        </Card.Content>
      </Card>

      <Card style={{ marginBottom: 16 }}>
        <Card.Cover
          source={{
            uri: 'https://th.bing.com/th/id/OIP.CE9a55275ojV8k0wRE0RXgHaE6?w=494&h=328&rs=1&pid=ImgDetMain',
          }}
        />
        <Card.Title title="Hokkaido" />
        <Card.Content>
          <Text variant="bodyMedium">
            {' '}
            Hokkaido é a segunda maior ilha do Japão, localizada ao norte do
            país, famosa por suas paisagens naturais e clima frio. A região é
            conhecida por seus invernos rigorosos e resorts de esqui, como
            Niseko, sendo um destino popular para esportes de inverno. No verão,
            Hokkaido oferece belos campos de flores, trilhas de montanha e
            fontes termais. A cidade de Sapporo, capital de Hokkaido, é famosa
            pelo seu festival anual de neve e por sua culinária, incluindo o
            ramen e cerveja locais. A ilha também é menos urbanizada,
            destacando-se pela sua agricultura e parques nacionais.
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default CidadesRoute;

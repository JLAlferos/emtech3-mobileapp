import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF2EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  notificationIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  notificationTray: {
    position: 'absolute',
    top: 230,
    right: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationText: {
    fontSize: 14,
    color: 'black',
  },
  statusText: {
    fontSize: 22,
    marginVertical: 20,
    color: 'black',
  },
  statusCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusCircleOff: {
    backgroundColor: 'lightgray',
  },
  statusCircleOn: {
    backgroundColor: 'green',
  },
  statusLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  statusLabelOn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  infoBoxContainer: {
    width: '90%',
    gap: 10,
    marginTop: 20,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 25,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
  },
  infoSubText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;

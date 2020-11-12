const [newImg, setNewImg] = useState(null);

useEffect(() => {
  if(route.params) {
    setNewImg(route.params.overlayImg)
  }
}, [route?.params?.overlayImg]);
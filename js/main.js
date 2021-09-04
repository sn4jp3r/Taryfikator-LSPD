$(document).ready(function() {
	// obiekt z całym taryfikatorem
	var obj = {
		'Wykroczenia drogowe':{
			'Jazda pod wpływem alkoholu lub substancji odurzających': {
                'Dodatkowe': 'Odholowanie pojazdu, Konfiskata prawo jazdy',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Jazda bez prawa jazdy': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Przekroczenie prędkości w mieście': {
                'Dodatkowe': 'Dopuszczalny błąd radaru - 10km/h',
                'Kwota min': 2000,
                'Kwota max': 8000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Brawurowa jazda': {
                'Dodatkowe': '',
                'Kwota min': 4000,
                'Kwota max': 4000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Stwarzanie zagrożenia w ruchu lądowym': {
                'Dodatkowe': 'Konfiskata prawo jazdy',
                'Kwota min': 10000,
                'Kwota max': 10000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Niezatrzymanie pojazdu do kontroli': {
                'Dodatkowe': '',
                'Kwota min': 3000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Niewłaściwe parkowanie': {
                'Dodatkowe': '',
                'Kwota min': 1000,
                'Kwota max': 1000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Zły stan techniczny pojazdu': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 2000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Przejazd na czerwonym świetle': {
                'Dodatkowe': '',
                'Kwota min': 500,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Zniszczenie mienia': {
                'Dodatkowe': '',
                'Kwota min': 3000,
                'Kwota max': 3000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Spowodowanie kolizji/wypadku': {
                'Dodatkowe': '',
                'Kwota min': 2000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Jazda pod prąd': {
                'Dodatkowe': '',
                'Kwota min': 4000,
                'Kwota max': 4000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Potrącenie przechodnia': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Przechodzenie przez jezdnię w niedozwolonym miejscu': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 500,
                'Kwota max': 500,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
		},
        'Przestępstwa lekkie': {
            'Niszczenie mienia publicznego': {
                'Dodatkowe': '',
                'Kwota min': 2000,
                'Kwota max': 4000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
            'Niewykonywanie poleceń funkcjonariusza': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 1500,
                'Kwota max': 5000,
                'Więzienie min': 10,
                'Więzienie max': 10,
            },
			'Obraza funkcjonariusza': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 3000,
                'Kwota max': 6000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Utrudnianie pracy służbom publicznym': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 1500,
                'Kwota max': 1500,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Fałszywe zgłoszenie': {
                'Dodatkowe': '',
                'Kwota min': 1500,
                'Kwota max': 3000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Niszczenie cudzej własności': {
                'Dodatkowe': 'Pokrycie szkód',
                'Kwota min': 1500,
                'Kwota max': 3000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Składanie fałszywych zeznań': {
                'Dodatkowe': '',
                'Kwota min': 1000,
                'Kwota max': 3000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Kradzież pojazdu': {
                'Dodatkowe': 'Odholowanie pojazdu',
                'Kwota min': 2000,
                'Kwota max': 6000,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Posiadanie kontrabandy': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 3000,
                'Kwota max': 9000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
			'Stawianie oporu': {
                'Dodatkowe': '',
                'Kwota min': 3000,
                'Kwota max': 3000,
                'Więzienie min': 10,
                'Więzienie max': 10,
            },
			'Kradzież cudzej własności': {
                'Dodatkowe': 'Pokrycie szkód',
                'Kwota min': 2000,
                'Kwota max': 5000,
                'Więzienie min': 5,
                'Więzienie max': 10,
            },
			'Chodzenie zamaskowanym po mieście': {
                'Dodatkowe': 'Upomnienie/Rewizja',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Próba przekupstwa': {
                'Dodatkowe': 'Upomnienie',
                'Kwota min': 2000,
                'Kwota max': 2000,
                'Więzienie min': 5,
                'Więzienie max': 10,
            },
			'Kradzież radiowozu': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 15000,
                'Kwota max': 15000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
        }, 'Przestępstwa ciężkie': {
			'Groźby przy użyciu broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 4000,
                'Kwota max': 8000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
			'Ucieczka przed policją': {
                'Dodatkowe': '',
                'Kwota min': 7500,
                'Kwota max': 7500,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Porwanie': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 10000,
                'Kwota max': 10000,
                'Więzienie min': 15,
                'Więzienie max': 25,
            },
			'Pomoc w ucieczce': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 10,
                'Więzienie max': 10,
            },
			'Współudział w przestępstwie': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 20000,
                'Więzienie min': 10,
                'Więzienie max': 40,
            },
			'Napad na sklep': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 5000,
                'Kwota max': 12000,
                'Więzienie min': 15,
                'Więzienie max': 20,
            },
			'Napad na konwój': {
                'Dodatkowe': 'Konfiskata licencji na broń, Konfiskata gotówki przy sobie',
                'Kwota min': 10000,
                'Kwota max': 20000,
                'Więzienie min': 15,
                'Więzienie max': 20,
            },
			'Napad na skarbiec': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 15000,
                'Kwota max': 30000,
                'Więzienie min': 20,
                'Więzienie max': 40,
            },
			'Prowokacja policji': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 15000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
			'Próba napadu/napaści': {
                'Dodatkowe': '',
                'Kwota min': 500,
                'Kwota max': 10000,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Podszywanie się pod funkcjonariusza LSPD': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 15,
                'Więzienie max': 15,
            },
			'Nękanie obywatela/obywatelki': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 0,
                'Więzienie max': 0,
            },
			'Terroryzm': {
                'Dodatkowe': 'Dożywocie/Rozprawa sądowa',
                'Kwota min': 360000,
                'Kwota max': 360000,
                'Więzienie min': 360,
                'Więzienie max': 360,
            },
		}, 'Przestępstwa związane z bronią i nielegalnymi substancjami': {
			'Posiadanie narkotyków miękkich (marihuana powyżej 5g)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 5,
                'Więzienie max': 10,
            },
			'Posiadanie narkotyków twardych (metamfetamina/kokaina)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 10000,
                'Kwota max': 10000,
                'Więzienie min': 10,
                'Więzienie max': 15,
            },
			'Handel narkotykami miękkimi (marihuana)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 7500,
                'Kwota max': 7500,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
			'Handel narkotykami twardymi (metamfetamina/kokaina)': {
                'Dodatkowe': 'Rewizja',
                'Kwota min': 10000,
                'Kwota max': 15000,
                'Więzienie min': 15,
                'Więzienie max': 30,
            },
			'Posiadanie broni bez zezwolenia': {
                'Dodatkowe': 'Konfiskata',
                'Kwota min': 30000,
                'Kwota max': 30000,
                'Więzienie min': 20,
                'Więzienie max': 20,
            },
			'Posiadanie rejestrowanej broni krótkiej': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 30000,
                'Kwota max': 45000,
                'Więzienie min': 20,
                'Więzienie max': 30,
            },
			'Posiadanie nielegalnej broni klasy drugiej': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 100000,
                'Kwota max': 100000,
                'Więzienie min': 40,
                'Więzienie max': 60,
            },
			'Handel bronią': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 15000,
                'Kwota max': 15000,
                'Więzienie min': 15,
                'Więzienie max': 30,
            },
			'Bezpodstawne użycie broni': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 10000,
                'Kwota max': 15000,
                'Więzienie min': 10,
                'Więzienie max': 20,
            },
		}, 'Przestępstwa związane z użyciem siły/uszczerbkiem na zdrowiu': {
			'Usiłowanie zabójstwa': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 15000,
                'Kwota max': 30000,
                'Więzienie min': 15,
                'Więzienie max': 25,
            },
			'Usiłowanie zabójstwa funkcjonariusza LSPD': {
                'Dodatkowe': 'Konfiskata licencji na broń',
                'Kwota min': 20000,
                'Kwota max': 40000,
                'Więzienie min': 25,
                'Więzienie max': 40,
            },
			'Napaść na funkcjonariusza LSPD': {
                'Dodatkowe': '',
                'Kwota min': 10000,
                'Kwota max': 20000,
                'Więzienie min': 15,
                'Więzienie max': 25,
            },
			'Groźby karalne': {
                'Dodatkowe': '',
                'Kwota min': 5000,
                'Kwota max': 5000,
                'Więzienie min': 5,
                'Więzienie max': 10,
            },
			'Nieumyślne spowodowanie uszczerbku na zdrowiu': {
                'Dodatkowe': '',
                'Kwota min': 2000,
                'Kwota max': 2000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Naruszenie nietykalności cielesnej': {
                'Dodatkowe': '',
                'Kwota min': 2000,
                'Kwota max': 2000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Udział w bójce': {
                'Dodatkowe': '',
                'Kwota min': 1000,
                'Kwota max': 2000,
                'Więzienie min': 5,
                'Więzienie max': 5,
            },
			'Morderstwo': {
                'Dodatkowe': 'Dożywocie/Rozprawa sądowa',
                'Kwota min': 360000,
                'Kwota max': 360000,
                'Więzienie min': 360,
                'Więzienie max': 360,
            },
		}
    };
	
	//tworzenie htmla
	$("body").append('<input type="submit" id="show" value="Pokaż"/>');
	var i = 1;
	$.each(obj, function(k, v) {
		$("body").append('<div id="cat' + i + '">');
		var category = $('<p class="category"></p>').text(k);
		$("#cat" + i + "").append(category);
		$("#cat" + i + "").append('<div class="checkboxes" id="cb' + i + '"style="display: none">');
		$.each(v, function(k2, v2) {
			var name = $('<p id="values"></p>');
			var name2 = $('<label></label>');
			var name3 = '<input type="checkbox" value="' + k2 +'">' + k2 + ' <input type="text" id="' + k2.split(/[\s, )(/]+/).join('') +'" value=1>';
			$(name2).append(name3);
			$(name).append(name2);
			$("#cb" + i + "").append(name);
			name.append('<br>');
			name.append(document.createTextNode("("));
			$.each(v2, function(k3, v3) {
				if(v3 == ''){
					v3 = 'Brak';
				};
				name.append(document.createTextNode(" " + k3 + ": " + v3 + ","));
			});
			name.append(document.createTextNode(")"));
		});
		i = i+1;
	});
	$("body").append('<div class="footer"><p>Copyright 2021 © by SN4JP3R#6370</p></div>');

    // tablice przechowująca zaznaczone wartości
	var arrayDodatkowe = [];
    var arrayMinKwota = [];
    var arrayMaxKwota = [];
	var arrayMinWiezienie = [];
	var arrayMaxWiezienie = [];

    // rozwijanie kategorie
    $('.category').click(function() {
        $(this).next().toggle();
    });

    $('#show').click(function() {
        // przy każdym kliknięciu pokaż należy wyczyścić tablicę
		arrayWyrok = [];
        arrayDodatkowe = [];
		arrayMinKwota = [];
		arrayMaxKwota = [];
		arrayMinWiezienie = [];
		arrayMaxWiezienie = [];
        $('input:checkbox:checked').each(function() {
			var name = $(this).val();
			var quantity = $('#' + name.split(/[\s, )(/]+/).join('') + '');
			var q2 = quantity.val();
			// dodawanie zaznaczonych wartości do 5 tablic
			if (q2 <= 1) {
				arrayWyrok.push(name);
				$.each(obj, function(k, v) {
					$.each(v, function(k2, v2) {
						if(k2 == name){
							$.each(v2, function(k3, v3) {
								if(k3 == 'Dodatkowe'){
									if(v3 != ''){
										if(arrayDodatkowe.length == 0){
											arrayDodatkowe.push(v3);
										} else {
											var exists = false;
											arrayDodatkowe.forEach(function(item){
												if(item == v3){
													exists = true;
												}
											});
											if(exists == false){
												arrayDodatkowe.push(v3);
											}
										}
									}
								} else if (k3 == 'Kwota min') {
									arrayMinKwota.push(v3);
								} else if(k3 == 'Kwota max') {
									arrayMaxKwota.push(v3);
								} else if(k3 == 'Więzienie min') {
									arrayMinWiezienie.push(v3);
								} else if(k3 == 'Więzienie max') {
									arrayMaxWiezienie.push(v3);
								};
							});
						}
					});
				});
			} else {
				arrayWyrok.push(name + " x" + q2);
				$.each(obj, function(k, v) {
					$.each(v, function(k2, v2) {
						if(k2 == name){
							$.each(v2, function(k3, v3) {
								if(k3 == 'Dodatkowe'){
									if(v3 != ''){
										if(arrayDodatkowe.length == 0){
											arrayDodatkowe.push(v3);
										} else {
											var exists = false;
											arrayDodatkowe.forEach(function(item){
												if(item == v3){
													exists = true;
												}
											});
											if(exists == false){
												arrayDodatkowe.push(v3);
											}
										}
									}
								} else if (k3 == 'Kwota min') {
									arrayMinKwota.push(v3 * q2);
								} else if(k3 == 'Kwota max') {
									arrayMaxKwota.push(v3 * q2);
								} else if(k3 == 'Więzienie min') {
									arrayMinWiezienie.push(v3 * q2);
								} else if(k3 == 'Więzienie max') {
									arrayMaxWiezienie.push(v3 * q2);
								};
							});
						}
					});
				});
			}
			//not checked
			$(this).prop('checked', false);
        });
		
		//zmienne do wyświetlania
		var wyrok = '';
		var dodatkowe = '';
		var minKwota = 0;
		var maxKwota = 0;
		var minWiezienie = 0;
		var maxWiezienie = 0;
		
		//połączenie wszystkich wartości w tablicach
		arrayWyrok.forEach(function(item){
			wyrok = wyrok + item + ", ";
		});
		arrayDodatkowe.forEach(function(item){
			dodatkowe = dodatkowe + item + ", ";
		});
		arrayMinKwota.forEach(function(item){
			minKwota += parseInt(item);
		});
		arrayMaxKwota.forEach(function(item){
			maxKwota += parseInt(item);
		});
		arrayMinWiezienie.forEach(function(item){
			minWiezienie += parseInt(item);
		});
		arrayMaxWiezienie.forEach(function(item){
			maxWiezienie += parseInt(item);
		});
		
		//pokazywanie wyroku
		if(wyrok == ''){
			alertify.error("Najpierw wybierz wykroczenie!");
		} else {
			//sprawdź czy mandat czy służba więzienna
			if(maxWiezienie > 0){
				alertify.success("Pomyślnie uzyskano sugestię wyroku");
				setTimeout(function(){
					alertify.alert("<b>Wyrok:</b><br>"+wyrok+"<br><br><b>Proponowana kara:</b><br>Grzywna: Od "+minKwota+"$ do "+maxKwota+"$<br>Więzienie: Od "+minWiezienie+" miesięcy do "+maxWiezienie+" miesięcy<br>Dodatkowe: "+dodatkowe, ).setting({
						'title': "<b><font size='4'>Sugestia wyroku</font></b>",
						'movable': false,
					}).show();
				},700);
			} else {
				alertify.success("Pomyślnie uzyskano sugestię wyroku");
				setTimeout(function(){
					alertify.alert("<b>Wykroczenie:</b><br>"+wyrok+"<br><br><b>Proponowana kara:</b><br>Mandat: Od "+minKwota+"$ do "+maxKwota+"$<br>Dodatkowe: "+dodatkowe, ).setting({
						'title': "<b><font size='4'>Sugestia mandatu</font></b>",
						'movable': false,
					}).show();
				},700);
			}
		}
    });
});
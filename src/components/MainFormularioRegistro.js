import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainFormularioRegistro extends React.Component {
  render() {
    return (
      <>

      
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-8 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Formulario de Registro{" "}
                  </h5>
                  <form className="form-signin"></form>
                  <div className="form-row">
                    <div className="col">
                      <label className="inputPassword">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                      ></input>
                    </div>
                    <div className="col">
                      <label className="inputPassword">Apellidos</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellidos"
                      ></input>
                    </div>
                  </div>

                  <div className="form-group">
                    <label> Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                    />
                  </div>

                  <div className="form-row">
                    <div className="col">
                      <label className="inputPassword">Contraseña</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contraseña"
                      ></input>
                    </div>
                    <div className="col">
                      <label className="inputPassword">Confirmación</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Confirmación"
                      ></input>
                    </div>
                  </div>


                  <div id="identificationtype" class="form_linea">
                    <div class="form_texto">
                      <p>Tipo de identificación<span>*</span></p>
                    </div>
                    <div class="col-md-3 form-group">
                      <select id="DLio" class="form-control" name="DLio"><option value="0">Seleccione</option><option value="1" selected="">Cédula de ciudadanía</option><option value="2">Cédula de extranjería</option><option value="3">Tarjeta de identidad</option><option value="4">Pasaporte</option><option value="5">Número de Identificación </option></select>
                    </div>
                    <div class="col-md-4 form-group">
                      <input

                        className="form-control"
                        type="text"
                        name="iddocumento"

                      />
                    </div>
                  </div>

                  <div class="form_linea form-row">
                    <div class="form_texto">
                      <p>Fecha de nacimiento<span>*</span></p>
                    </div>
                    <div class="form_inputs tres_inputs  form-row" >
                      <div class="col-md-4 form-group">
                        <select id="fnacimiento-dia" class="cm-5 form-control" name="fnacimiento" ><option value="0">Día</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16" selected="">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div>

                      <div class="col-md-4 form-group">
                        <select id="fnacimiento-mes" class="cm-5 form-control" name="fnacimiento-mes"><option value="0">Mes</option><option value="1">Enero</option><option value="2">Febrero</option><option value="3">Marzo</option><option value="4">Abril</option><option value="5">Mayo</option><option value="6">Junio</option><option value="7">Julio</option><option value="8">Agosto</option><option value="9">Septiembre</option><option value="10">Octubre</option><option value="11" selected="">Noviembre</option><option value="12">Diciembre</option></select></div>
                      <div class="col-md-4 form-group">
                        <select id="fnacimiento-ano" class="cm-5 form-control" name="fnacimiento-ano"><option value="0">Año</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996" selected="">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option></select></div>
                    </div>
                  </div>



                  <div class="form_linea form-row">
                    <div class="form_texto">
                      <p>Teléfono<span>*</span></p>
                    </div>
                    <div className="col-md-3 form-group">
                      <select id="LTelf1" class="form-control" name="LTelf1"><option value="0">Seleccione</option><option value="1" selected="">Celular</option><option value="2">Fijo</option><option value="3">Oficina</option></select>
                    </div>
                    <div className="col-md-3 form-group">
                      <input name="ctl00$ContainerGeneralOverWrite$ContainerGeneral$telf1" type="tel" value="57" id="telf1" class="form-control" data-msg-number="Introduzca un número de teléfono válido" />
                    </div>
                    <div class="form_inputs tres_inputs col-md form-group">
                      <input name="ctl00$ContainerGeneralOverWrite$ContainerGeneral$telf12" type="tel" value="" id="telf12" class="form-control" data-msg-number="Introduzca un número de teléfono válido" />
                    </div>
                  </div>


                
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label className="inputState">Departamento</label>
                      <select id="inputState" className="form-control">
                        <option selected>Departamento...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="inputState">Municipio</label>
                      <select id="inputState" className="form-control">
                        <option selected>Municipio...</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>

                  <div class="form_linea">
                    <div class="form_texto">
                      <p>Género<span>*</span></p>
                    </div>
                    <div class="form_inputs">
                      <input type="radio" id="shombre" name="sexo" value="1" /><label for="shombre">Hombre</label>
                      <input type="radio" id="smujer" name="sexo" value="2" checked="" /><label for="smujer">Mujer</label>
                    </div>
                  </div>

                  <div class="form_linea">
            <div class="form_texto">
              <p>Dirección<span>*</span></p>
            </div>
            <div class="form_inputs">
              <input name="ctl00$ContainerGeneralOverWrite$ContainerGeneral$direccion" type="text" value=" " id="ContainerGeneralOverWrite_ContainerGeneral_direccion" class="cm-12 form-control" />
            </div>
          </div>

          <div class="box_formulario">
                    <h2>Perfil profesional</h2>
                    <div class="box">
                        <div class="form_linea">
                            <div class="form_texto form_full">
                                <p>
                                    Cargo o titulo breve de su hoja de vida
                                    
                                    <span>*</span>
                                    
                                </p>
                            </div>
                            <div class="form_inputs form_full">
                                <input name="ctl00$ContainerGeneralOverWrite$ContainerGeneral$titulo" type="text" value="" maxlength="100" id="ContainerGeneralOverWrite_ContainerGeneral_titulo" class="cm-12 form-control" data-msg-maxlength=" " placeholder="Ej: Analista de crédito y riesgo"/>
                                <div class="contador" id="contadortitulo"></div>
                            </div>
                        </div>
                      
                        <div class="form_linea">
                            <div class="form_texto form_full">
                                <p>
                                    Descripción breve de su perfil profesional
                                                                        <span>*</span>
                                    
                                </p>
                            </div>
                            <div class="form_inputs form_full">
                                <textarea name="ctl00$ContainerGeneralOverWrite$ContainerGeneral$descperfil" rows="2" cols="20" id="ContainerGeneralOverWrite_ContainerGeneral_descperfil" class="form-control" data-msg-maxlength=" " placeholder="Ej: Amplia experiencia en la área financiera analista de crédito (énfasis en el manejo, identificación, clasificación, análisis y evaluación de operaciones de crédito). Análisis y aplicación de políticas financieras para la toma de decisiones en productos financieros y riesgo crediticio. Análisis de peticiones, quejas y reclamos."></textarea>
                                <div class="contador" id="contadordescperfil">
                                    <p>(máximo 500 carácteres)</p>
                                </div>

                        </div>
                      
                       
                      
                 
                               
                            
                          
                            </div>
                            </div>
                        </div>
                     
                            
             
                        <div id="DetallesExperienciasProfesionales" class="box_formulario">
                    <h2>Experiencias profesionales</h2>
                    <div id="addexperienceact">
                        <div class="box">
                            <div class="mas_exp">
                                <div class="no_expprof form_linea" >
                                    <label id="lblexperienciapro">
                                        <input type="checkbox" id="experienciapro" name="experienciapro"/>No tengo ninguna experiencia</label>
                                </div>
                             </div>

                             <div id="cloneexpini">
                    <div class="box" id="expformdiv">
                        <div id="DetalleExperiencia">
                            <div class="form_linea">
                                <div class="form_texto">
                                    <p>Empresa<span>*</span></p>
                                </div>
                                <div class="form_inputs pos_rel">
                                    <input type="hidden" id="xp-empresa" value="0" className='form-control'/>
                                    
                                    <div>
                                        <input type="text" id="ep-empresa" name="ep-empresa" class="cm-12 ep-empresa form-control" maxlength="100" data-autocomplete-extraparams="GetCompanyExtraParams" data-autocomplete-idholder="xp-empresa" data-autocomplete-method="GET" data-autocomplete-url="https://api-sug.computrabajo.com/company/get" autocomplete="off"/>
                                    </div>
                                    <div class="form_linea">
                                <div class="form_texto">
                                    <p>Rango de tiempo en la empresa <span>*</span></p>
                                </div>
                                <div class="form_inputs pos_rel">
                                <div class="col-md-4 form-group">
                        <select id="fnacimiento-dia" class="cm-5 form-control" name="tiempotrabajo" ><option value="0">Tiempo</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16" selected="">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div>                                    
                                   
                                </div>
                                </div>
                               
                                </div>
                            
                            <div class="form_linea">
                                <div class="form_texto">
                                    <p>Cargo<span>*</span></p>
                                </div>
                                <div class="form_inputs pos_rel">
                                    
                                    <div>
                                        <input type="text" id="ep-cargo" class="cm-12 form-control" name="ep-cargo" maxlength="50" data-autocomplete-extraparams="GetCargosExtraParams" data-autocomplete-idholder="idcargo" data-autocomplete-method="POST" data-autocomplete-url="/ajax/getprofessions" autocomplete="off"/>
                                    </div>
                                </div>
                            </div>
                            </div>
                                </div>
                            
                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div class="box_formulario">
                    <h2>Idiomas</h2>
                    <div class="box">
                        <div id="idiomaformdiv">
                            <div id="formidioma">
                                <div class="form_linea">
                                    <div class="form_texto">
                                        <p>Idiomas<span>*</span></p>
                                    </div>
                                    <div class="form_inputs tres_inputs">
                                    <div class="col-md-4 form-group">

                                        <select id="DLlang" class="cm-6 form-control" name="DLlang"><option value="0">Idiomas</option><option value="47">Español</option><option value="77">Inglés</option><option value="135">Portugués</option><option value="140">Ruso</option><option value="184">Árabe</option><option value="33">Chino</option><option value="55">Francés</option><option value="7">Alemán</option><option value="1">Abjaso</option><option value="2">Afar</option><option value="3">Afrikaans</option><option value="4">Aimara</option><option value="5">Akano</option><option value="6">Albanés</option><option value="8">Amárico</option><option value="9">Aragonés</option><option value="10">Armenio</option><option value="11">Asamés</option><option value="12">Avar</option><option value="13">Avéstico</option><option value="14">Azerí</option><option value="15">Bambara</option><option value="16">Baskir</option><option value="17">Bengalí</option><option value="18">Bhojpurí</option><option value="19">Bielorruso</option><option value="20">Birmano</option><option value="21">Bislama</option><option value="22">Bosnio</option><option value="23">Bretón</option><option value="24">Búlgaro</option><option value="25">Cachemiro</option><option value="26">Camboyano</option><option value="27">Canarés</option><option value="28">Catalán</option><option value="29">Chamorro</option><option value="30">Checheno</option><option value="31">Checo</option><option value="32">Chichewa</option><option value="34">Chuan</option><option value="35">Chuvasio</option><option value="36">Cingalés</option><option value="37">Coreano</option><option value="38">Corso</option><option value="39">Cree</option><option value="40">Croata</option><option value="41">Córnico</option><option value="42">Danés</option><option value="43">Dzongkha</option><option value="44">Eslavo</option><option value="45">Eslovaco</option><option value="46">Esloveno</option><option value="48">Esperanto</option><option value="49">Estonio</option><option value="50">Euskera</option><option value="51">Ewe</option><option value="52">Feroés</option><option value="53">Finés</option><option value="54">Fiyiano</option><option value="56">Frisón</option><option value="57">Fula</option><option value="58">Gallego</option><option value="59">Galés</option><option value="60">Gaélico</option><option value="61">Gaélico Escocés</option><option value="62">Georgiano</option><option value="63">Griego</option><option value="64">Groenlandés</option><option value="65">Guaraní</option><option value="66">Guyaratí</option><option value="67">Haitiano</option><option value="68">Hausa</option><option value="69">Hebreo</option><option value="70">Herero</option><option value="71">Hindú</option><option value="72">Hiri Motu</option><option value="73">Húngaro</option><option value="74">Ido</option><option value="75">Igbo</option><option value="76">Indonesio</option><option value="78">Interlingua</option><option value="79">Inuktitut</option><option value="80">Inupiaq</option><option value="81">Islandés</option><option value="82">Italiano</option><option value="83">Japonés</option><option value="84">Javanés</option><option value="85">Kanuri</option><option value="86">Kazajo</option><option value="87">Kikuyu</option><option value="88">Kirguís</option><option value="89">Kirundi</option><option value="90">Komi</option><option value="91">Kongo</option><option value="92">Kuanyama</option><option value="93">Kurdo</option><option value="94">Lao</option><option value="95">Latín</option><option value="96">Letón</option><option value="97">Limburgués</option><option value="98">Lingala</option><option value="99">Lituano</option><option value="100">Luba-Katanga</option><option value="101">Luganda</option><option value="102">Luxemburgués</option><option value="103">Macedonio</option><option value="104">Malayalam</option><option value="105">Malayo</option><option value="106">Maldivo</option><option value="107">Malgache</option><option value="108">Maltés</option><option value="109">Manés</option><option value="110">Maorí</option><option value="185">Mapugundun</option><option value="111">Maratí</option><option value="112">Marshalés</option><option value="113">Mongol</option><option value="114">Nauruano</option><option value="115">Navajo</option><option value="116">Ndebele Del Norte</option><option value="117">Ndebele Del Sur</option><option value="118">Ndonga</option><option value="119">Neerlandés</option><option value="120">Nepalí</option><option value="121">Noruego</option><option value="122">Noruego Bokmål</option><option value="123">Nynorsk</option><option value="124">Occidental</option><option value="125">Occitano</option><option value="126">Ojibwa</option><option value="127">Oriya</option><option value="128">Oromo</option><option value="129">Osético</option><option value="130">Pali</option><option value="131">Panyabí</option><option value="132">Pastú</option><option value="133">Persa</option><option value="134">Polaco</option><option value="136">Quechua</option><option value="137">Romanche</option><option value="138">Ruandés</option><option value="139">Rumano</option><option value="141">Sami Septentrional</option><option value="142">Samoano</option><option value="143">Sango</option><option value="144">Sardo</option><option value="145">Serbio</option><option value="146">Sesotho</option><option value="147">Setsuana</option><option value="148">Shona</option><option value="149">Sindhi</option><option value="150">Somalí</option><option value="151">Suajili</option><option value="152">Suazi</option><option value="153">Sueco</option><option value="154">Sundanés</option><option value="155">Sánscrito</option><option value="156">Tagalo</option><option value="157">Tahitiano</option><option value="158">Tailandés</option><option value="159">Tamil</option><option value="160">Tayiko</option><option value="161">Telugú</option><option value="162">Tibetano</option><option value="163">Tigriña</option><option value="164">Tongano</option><option value="165">Tsonga</option><option value="166">Turco</option><option value="167">Turcomano</option><option value="168">Twi</option><option value="169">Tártaro</option><option value="170">Ucraniano</option><option value="171">Uigur</option><option value="172">Urdu</option><option value="173">Uzbeko</option><option value="174">Valón</option><option value="175">Venda</option><option value="176">Vietnamita</option><option value="177">Volapük</option><option value="178">Wolof</option><option value="179">Xhosa</option><option value="180">Yi De Sichuán</option><option value="181">Yoruba</option><option value="182">Yídish</option><option value="183">Zulú</option></select></div>                                <div class="col-md-4 form-group">

                                <select id="DLlanglvl" class="cm-5 form-control" name="DLlanglvl"><option value="0">Nivel</option><option value="1">Muy Básico
                        </option><option value="2">Básico
                                </option><option value="3">Intermedio
                                </option><option value="4">Avanzado
                                </option><option value="5">Nativo
                                </option></select></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="col center">
                    <button
                      className="btn btn-lg  btn-block btn-btn btn-info buttonForm text-uppercase"
                      type="submit"
                    >
                      Registrar
                    </button>
                  </div>
                  <hr className="my-4"></hr>
                  <div className="card-title text-center">
                    Copyright © 2020 EduSkill
                  </div>
                  <div className="card-title text-center">
                    Área de desarrollo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainFormularioRegistro;

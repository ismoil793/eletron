import React from 'react';
import Head from "next/head";
import Layout from "../../components/Layout";
import Slider from "react-slick";


const Home = () => {

   const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
   };

   return (
       <>
          <Head>
             <title>
                Интернет-магазин техники в Ташкенте | eletron.uz
             </title>
             <meta
                 name="description"
                 content="Купить в Ташкенте по доступной цене и бесплатной доставкой? Легко на eletron.uz!"
             />
             <meta
                 name="keywords"
                 content="Онлайн-магазин, Техника, Ташкент"
             />
             <meta name="author" content="Eletron"/>
             <meta
                 property="og:image"
                 content="/static/img/brand/ogimage.png"
             />
          </Head>
          <Layout>
             <Slider {...settings} />

             <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi consequatur culpa
                dignissimos dolore error, et ex excepturi facilis fugit id inventore laboriosam laudantium libero magnam
                magni maxime molestiae mollitia neque nesciunt nihil, non odit pariatur perspiciatis porro provident
                quasi qui ratione reiciendis sit soluta ut vitae? Blanditiis commodi corporis, earum esse ex excepturi
                fugiat ipsa laboriosam, nesciunt nisi placeat quaerat suscipit tempora voluptate voluptatum. A
                architecto, corporis dolores eaque excepturi facilis molestiae mollitia nesciunt optio repellat
                reprehenderit velit voluptatum? Ab aperiam beatae distinctio eos fugit illo maiores, modi mollitia nobis
                obcaecati optio perferendis quam, quisquam quo repellat repudiandae, sed sit temporibus vero vitae.
                Accusantium consequatur id libero, molestiae sed totam. A asperiores assumenda consectetur, cum cumque
                delectus dolore, dolorem dolores eos iure maxime mollitia quasi quos ratione repellendus suscipit ullam.
                Architecto commodi dolor ducimus impedit labore maxime molestiae omnis. Ab accusantium adipisci
                consequuntur, error in libero mollitia placeat quos repudiandae tenetur. Adipisci aliquam amet animi
                aperiam architecto asperiores atque autem consequuntur debitis dolorem doloremque eligendi eum facere
                facilis fuga illo ipsam labore laborum minima minus modi molestiae neque nihil nostrum officiis pariatur
                perferendis quaerat quisquam, quos sit tempora tempore ullam unde veniam veritatis voluptas voluptatem.
                Amet aspernatur commodi culpa distinctio doloribus eaque est excepturi laborum non odit, omnis, quae
                quia, sapiente sed sequi sit soluta temporibus unde vel voluptate! Amet exercitationem minus quibusdam,
                sed unde velit voluptate! Accusamus accusantium aliquid corporis deleniti dolorum explicabo facere
                fugiat, illo, illum ipsa iure laudantium magnam maxime minima mollitia nam nostrum officia perferendis,
                praesentium provident quibusdam ratione recusandae repudiandae sapiente sed soluta vel voluptatibus?
                Corporis cumque eaque eius explicabo laudantium necessitatibus praesentium quo! Assumenda est eveniet
                laboriosam nobis omnis quae ratione reprehenderit voluptate? Asperiores corporis debitis impedit iusto
                voluptates. Adipisci, aliquid aut consequuntur debitis dolores, dolorum ducimus et exercitationem hic
                iste minima molestiae perferendis saepe sed sequi tempore velit veritatis vero. Accusamus labore
                molestias officiis ratione rerum totam voluptatum! Aliquid architecto consequatur deleniti ducimus et
                fuga illo inventore, laborum natus nesciunt provident qui repellat saepe, ut vel. Accusantium asperiores
                blanditiis consectetur consequatur culpa delectus dignissimos dolorum explicabo id illum ipsum itaque
                magnam maiores minima minus molestias neque nobis nostrum quae quia quis recusandae, rem sed sit soluta
                vel vero vitae voluptas voluptates voluptatibus. Beatae eius officiis possimus. Animi cum deserunt,
                libero molestiae neque pariatur placeat possimus provident quo ratione reprehenderit sapiente temporibus
                vero! Adipisci, animi atque aut deleniti dicta enim est libero non repellendus saepe soluta voluptatum!
                Consequatur cupiditate delectus magni minima modi necessitatibus quibusdam quis quod reiciendis
                suscipit. Fuga incidunt natus nesciunt nihil perspiciatis, repudiandae sequi soluta temporibus! Animi
                atque, molestiae. A asperiores eum facere molestias odio quidem quos tenetur voluptatem. Beatae dolorem
                doloremque eligendi, ex fugit molestiae odio optio perspiciatis provident quam, quo quod quos saepe
                ullam, unde? Inventore modi quas quos voluptatem voluptatum. Accusamus accusantium alias aspernatur
                dolor error esse ipsam itaque libero magnam numquam obcaecati odio officiis placeat quaerat quas quasi
                sapiente ullam velit, vitae voluptatibus! Assumenda at dolorum libero quae recusandae sunt totam?
                Commodi consectetur delectus dicta dolore doloribus eos in libero minima modi neque nihil, obcaecati,
                sapiente soluta sunt suscipit tempore ut? A accusamus at cum distinctio eligendi eveniet impedit in
                inventore laboriosam magni odit omnis qui rem repellendus sint sit, suscipit temporibus! Debitis
                dignissimos error inventore iusto molestiae vel! Aliquam amet aspernatur, distinctio dolores dolorum
                eius exercitationem, facilis in magnam molestiae natus nihil numquam optio ratione repudiandae sapiente
                sed voluptatem voluptates. Ab architecto at beatae consequuntur dicta dolor dolorum, eos error ex fugit
                harum ipsam ipsum magnam mollitia nam nemo nesciunt nihil non obcaecati perferendis quae quidem quis
                reprehenderit sequi vel voluptates voluptatum? Animi cumque delectus dicta ducimus eaque eos est,
                excepturi harum illo inventore iste nam neque nihil odit praesentium quasi quos rem totam, veritatis
                vero? At consectetur dolores magni perferendis ullam? Accusantium deserunt eaque excepturi inventore
                perspiciatis quis, recusandae similique? Accusamus accusantium, ad amet asperiores aspernatur atque
                commodi corporis cumque delectus deserunt dolor enim eos est expedita impedit incidunt ipsum labore
                molestias necessitatibus neque non officia pariatur perferendis perspiciatis quam quas quasi quisquam
                quos ratione recusandae sequi suscipit tempora unde? Aut enim maxime minus modi odio? Accusamus alias,
                aspernatur delectus dicta dolore eum eveniet ex illo incidunt laboriosam molestiae odit qui saepe sit
                temporibus. Ad adipisci amet asperiores consectetur distinctio, eius eveniet facilis molestiae nihil,
                officiis perspiciatis quas quia quibusdam quos voluptatibus! Ad aspernatur dolore dolorum expedita
                facere fugiat impedit libero nam natus nostrum perspiciatis quaerat quas, quia soluta suscipit totam
                ullam! Animi atque beatae cum cupiditate enim exercitationem impedit, magni molestiae nesciunt numquam
                possimus, repellendus repudiandae veritatis vero voluptas. Aliquam consequatur eligendi excepturi
                facilis in iusto, necessitatibus optio porro, quae reiciendis repellendus suscipit voluptas. Adipisci,
                alias aperiam aspernatur assumenda blanditiis consectetur consequuntur cum delectus dicta doloribus ea
                et eum explicabo incidunt inventore ipsa, ipsum itaque iusto magni modi molestiae molestias mollitia
                natus nemo odio perferendis provident quasi repudiandae soluta tempore totam unde ut voluptas!
                Aspernatur explicabo ipsa ipsum unde. Fugiat illo impedit, molestiae quas repellendus tempore voluptate!
                Est fugiat inventore nesciunt numquam ullam voluptatem. Commodi et id incidunt ipsam magnam. Distinctio
                maxime minima qui quo sed. Aperiam corporis cupiditate distinctio dolorem doloremque eius esse eum
                explicabo fugiat impedit in laborum modi, nobis, odio odit, perferendis possimus quaerat quam quasi quia
                quidem quisquam recusandae rerum similique sit sunt suscipit tempore tenetur unde voluptate! Culpa dolor
                ducimus facere inventore molestiae? Asperiores at cumque earum nihil officiis porro quae reiciendis
                velit. Aliquam assumenda distinctio ducimus et, eveniet facilis id laborum nemo quos tenetur unde vero
                voluptatem voluptates. A at, autem dolore doloremque ea et facilis impedit laboriosam mollitia nam neque
                odio perspiciatis, praesentium quas quasi quod saepe velit voluptas? Animi asperiores aspernatur
                consequuntur dignissimos eum, molestiae mollitia officiis quam suscipit. Consectetur dicta, dolor et
                explicabo facere laborum quasi reiciendis sit sunt tempora? Molestiae, nobis, sit! Corporis, fugit
                saepe. Ad amet at aut delectus eaque facilis fuga laudantium provident quos repellat. Ab at, aut
                corporis dolore eius ex harum illo ipsum iusto minus, modi nihil odit officia perferendis perspiciatis
                placeat porro quibusdam sunt veritatis vitae voluptatem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam at cum dolorum error, et
                excepturi in ipsam iste, modi molestiae nam nostrum nulla numquam omnis rem repellendus velit veritatis
                voluptas voluptatem? Accusamus accusantium aperiam at atque autem commodi cum cupiditate deleniti
                deserunt dolore dolorem ducimus ea eaque enim, eos fugiat ipsa magni maiores minus molestias mollitia
                officiis perferendis perspiciatis porro qui quidem, quo quod ratione repellendus sequi sit sunt tempore
                velit veritatis vero voluptas voluptatum? Alias architecto aspernatur deleniti deserunt dolore dolores
                earum eveniet expedita iusto labore, libero nesciunt optio perspiciatis porro praesentium provident quae
                quaerat quisquam quo reprehenderit sed sint tempore temporibus totam unde veniam veritatis! Culpa, eaque
                eum fugiat hic incidunt nulla officiis quidem reprehenderit repudiandae voluptates! Delectus fugiat id
                labore neque nostrum qui ratione repellendus repudiandae voluptate voluptatum! Aliquid animi assumenda
                earum enim perferendis provident quibusdam quod. Accusantium amet harum iusto reprehenderit. A accusamus
                aperiam consequatur ipsa nam pariatur quaerat quis reprehenderit sint suscipit. Aliquam asperiores
                assumenda delectus deserunt eveniet, fugit modi, necessitatibus odit officiis, praesentium quaerat quas
                quidem quod suscipit veritatis. Architecto aspernatur assumenda at consectetur, debitis dolores eius
                explicabo, modi molestias natus nostrum nulla praesentium ratione repudiandae, ut. Ad alias aperiam
                consequuntur excepturi ipsa modi odio! Aliquam atque consectetur eaque iure ratione! Ab eos in, itaque
                quod ratione sunt. Ea iusto modi possimus ratione? Aperiam aspernatur commodi doloribus eos esse
                exercitationem fugiat illo iusto maiores minima, odit possimus quaerat quas quisquam, repudiandae saepe,
                tempora voluptate voluptates. Adipisci amet beatae, consequatur consequuntur cum, eaque eos error facere
                fugiat incidunt libero minus mollitia neque optio qui quidem rerum sit tempora tempore unde ut
                voluptate, voluptatibus. Amet animi asperiores beatae commodi, consequatur culpa cum ea ex expedita
                harum itaque minus molestiae mollitia neque nostrum nulla pariatur qui quisquam ratione recusandae saepe
                similique voluptate voluptatibus? Aliquid ipsum laborum non omnis placeat porro quidem quisquam
                reprehenderit repudiandae totam. Alias aliquam aperiam consectetur corporis debitis dolore dolorem
                doloribus ducimus ea, enim esse excepturi harum illo ipsam itaque laudantium maxime minima minus
                molestiae nam nemo nihil obcaecati officia officiis omnis pariatur provident qui rem repellendus sequi
                sint sit unde voluptates. Amet atque dolorem dolores earum enim eum labore laudantium minima, molestiae,
                nesciunt provident qui voluptate. Blanditiis commodi eos eveniet impedit ipsa itaque optio pariatur quos
                voluptatibus. A accusantium amet, praesentium quo reiciendis repudiandae. Adipisci alias at debitis
                distinctio doloribus dolorum earum eligendi facere maxime molestias officia qui, quo rem reprehenderit
                rerum suscipit vel! Accusantium alias at debitis dignissimos distinctio eligendi eveniet expedita
                explicabo facere id iusto, magni, numquam odit omnis pariatur quaerat quasi qui quidem quisquam quod
                quos tempore vel voluptate. Consectetur cupiditate deleniti dicta dolorem dolores inventore minima natus
                qui, quisquam quos repudiandae temporibus voluptates. Ab aliquid aperiam beatae cumque deleniti impedit,
                natus pariatur repudiandae sit velit! Aut ducimus earum eos eveniet exercitationem ipsum labore
                praesentium quos! Amet enim maiores perspiciatis quas sapiente. Accusantium asperiores ducimus est
                excepturi facilis hic laboriosam magnam minus nisi non nulla obcaecati, omnis pariatur quasi, sit
                temporibus unde, voluptates? A aliquam amet assumenda blanditiis debitis dicta, dolore ea eaque earum,
                eos labore laboriosam libero magnam maiores modi quo reprehenderit sed, sequi soluta totam unde vel
                velit veritatis. At incidunt molestiae nisi quaerat sunt! Assumenda cupiditate doloribus eius, error
                excepturi mollitia neque optio quis? Adipisci alias aliquid asperiores aspernatur aut commodi
                consectetur consequatur deleniti dignissimos distinctio doloremque dolores eaque esse facere fugiat id
                illo ipsum laboriosam laborum magni maiores modi molestiae, nam nemo obcaecati officia praesentium quia
                quis reprehenderit repudiandae sapiente soluta suscipit tempore veniam veritatis voluptate voluptates.
                Aliquid beatae cumque dicta distinctio ducimus facere in iusto modi molestiae, nihil provident, quae
                quam voluptas? A accusantium aliquam aut commodi consequatur culpa cum debitis deleniti deserunt
                dignissimos distinctio eligendi eum eveniet illo, inventore labore maxime minima officiis pariatur
                perferendis repellendus sapiente veniam? Cupiditate dolorem enim id maxime nobis nulla sapiente tenetur
                totam veritatis voluptatum! Ab accusamus accusantium, aliquam aliquid asperiores assumenda beatae culpa
                cupiditate ea id in ipsa iste iure iusto laborum molestiae nam, non praesentium quaerat saepe sapiente
                sequi tempora totam ut velit veniam voluptatem voluptatum! Consequuntur deserunt dolore doloribus esse
                itaque praesentium ut veniam? Ab accusamus animi cupiditate dicta dignissimos doloremque eaque error
                explicabo fuga harum inventore ipsam libero magnam magni molestias necessitatibus nesciunt, non nulla
                perspiciatis placeat quidem rem repellat rerum unde voluptates! Asperiores culpa delectus explicabo
                ipsam iusto natus nemo nisi! Asperiores deserunt ducimus ea, et incidunt ipsa nemo pariatur possimus
                quas quisquam! Ad autem consequatur distinctio eum eveniet illo incidunt quam ratione tempore
                temporibus? Alias aspernatur at dolore nam provident qui soluta, veniam voluptas? Ab accusamus aperiam
                assumenda, ducimus ea error fuga fugit inventore ipsam ipsum iste itaque magnam necessitatibus nostrum
                suscipit veniam, vero. Aliquam deserunt exercitationem iusto, nihil nisi nobis obcaecati omnis
                perspiciatis rerum sapiente. Assumenda numquam omnis repellendus vero. Inventore sit tempore voluptatem!
                Architecto consectetur corporis debitis fuga illo inventore ipsum, laborum maxime natus pariatur quam
                quidem quis repellat sapiente sunt temporibus tenetur vero? Ab accusamus accusantium commodi consectetur
                culpa delectus eaque eveniet expedita fuga ipsum iste magni molestiae natus nobis non, officia
                praesentium quae quasi quibusdam recusandae repellat rerum sapiente sed sunt unde ut voluptates?
                Assumenda deserunt dicta iste quidem temporibus! Ad aperiam dicta eaque expedita, repellat sit velit
                voluptatem! Ab aliquam animi aperiam architecto corporis dolore eos ex excepturi expedita molestiae,
                officiis quidem quis quo soluta tempora velit, voluptate voluptatum. A distinctio, minima. A accusantium
                architecto consectetur dignissimos dolore ea enim, esse expedita facere fugit id incidunt iure libero
                natus non numquam placeat, porro quasi quo reprehenderit tempora unde vel velit. Aliquid distinctio
                explicabo ipsum iusto, minus quaerat qui sit tenetur? Alias blanditiis consequuntur debitis doloremque,
                dolores expedita explicabo fugit impedit iusto laboriosam laudantium maxime minus molestias nesciunt
                nisi numquam, officia optio perferendis placeat quae quibusdam quidem veritatis voluptates. Accusamus
                magnam non praesentium voluptate! Amet autem consectetur dicta distinctio, excepturi exercitationem
                expedita in minima nam neque quae, quaerat repellendus unde? Beatae, officia, unde! At dolor fuga
                laboriosam maiores molestias nemo nihil nulla officia, quia quisquam repudiandae sapiente soluta,
                suscipit vel vitae. Ea est omnis quos sed voluptatem voluptates!
             </div>

          </Layout>
       </>
   );
};

export default Home;